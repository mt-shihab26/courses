from typing import List
from fastapi import status, Response, HTTPException, Depends, APIRouter
from sqlalchemy import func
from sqlalchemy.orm import Session
from sqlalchemy.sql import desc
from .. import models, schemas, oauth2
from ..database import get_db


router = APIRouter(prefix="/posts", tags=["Posts"])


@router.post("/", status_code=201,  response_model=schemas.Post)
def create_post(post: schemas.PostCreate, db: Session = Depends(get_db),
                current_user: models.User = Depends(oauth2.get_current_user)):
    new_post = models.Post(owner_id=current_user.id, **post.dict())
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post


@router.get("/", response_model=List[schemas.PostOut])
def get_posts(db: Session = Depends(get_db),
              current_user: models.User = Depends(oauth2.get_current_user),
              limit: int = 10, skip: int = 0, search: str = ""):

    post = db.query(models.Post, func.count(models.Vote.post_id).label("votes")
                    ).join(models.Vote, models.Vote.post_id == models.Post.id, isouter=True
                           ).group_by(models.Post.id
                                      ).filter(models.Post.title.contains(search)
                                               ).limit(limit).offset(skip).all()
    return post


@router.get("/{given_id}", response_model=schemas.PostOut)
def get_one_post(given_id: int, db: Session = Depends(get_db),
                 current_user: int = Depends(oauth2.get_current_user)):
    post = db.query(models.Post, func.count(models.Vote.post_id).label("votes")
                    ).join(models.Vote, models.Vote.post_id == models.Post.id, isouter=True
                           ).group_by(models.Post.id).filter(models.Post.id == given_id).first()
    if post is None:
        raise HTTPException(404, f"id: {given_id} was not found")
    return post


@router.put("/{given_id}", response_model=schemas.Post)
def update_post(given_id: int, given_post: schemas.PostCreate,
                db: Session = Depends(get_db),
                current_user: int = Depends(oauth2.get_current_user)):
    post_query = db.query(models.Post).filter(models.Post.id == given_id)
    post = post_query.first()
    if post is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND,
                            f"id: {given_id} was not found")
    if post.owner_id != current_user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                            detail=f"No authorized to perform requeste action")
    post_query.update(given_post.dict(), synchronize_session=False)
    db.commit()
    return post_query.first()


@router.delete("/{given_id}", status_code=204)
def delete_post(given_id: int, db: Session = Depends(get_db),
                current_user: models.User = Depends(oauth2.get_current_user)):
    post_query = db.query(models.Post).filter(models.Post.id == given_id)
    post = post_query.first()
    if post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"post with id: {given_id} does not exist"
        )
    if post.owner_id != current_user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                            detail="No authorized to perform requested action")
    post_query.delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
