from fastapi import status, Response, HTTPException, Depends, APIRouter
from ..database import get_db
from sqlalchemy.orm import Session
from sqlalchemy.sql import desc
from .. import models, schemas, oauth2
from typing import List


router = APIRouter(
    prefix="/posts",
    tags=["Posts"]
)

oauth2

# Create


@router.post("/", status_code=201,  response_model=schemas.Post)
def create_post(post: schemas.PostCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):

    print(current_user)
    new_post = models.Post(**post.dict())
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post


# Read
@router.get("/", response_model=List[schemas.Post])
def get_posts(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    posts = db.query(models.Post).all()
    return posts


@router.get("/latest", response_model=schemas.Post)
def get_latest_post(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    post = db.query(models.Post).order_by(desc(models.Post.create_at)).first()
    return post


@router.get("/{given_id}", response_model=schemas.Post)
def get_one_post(given_id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    post = db.query(models.Post).filter(models.Post.id == given_id).first()
    if post is None:
        raise HTTPException(404, f"id: {given_id} was not found")
    return post


# Update
@router.put("/{given_id}", response_model=schemas.Post)
def update_post(given_id: int, given_post: schemas.PostCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    query = db.query(models.Post).filter(models.Post.id == given_id)
    post = query.first()
    if post is None:
        raise HTTPException(404, f"id: {given_id} was not found")
    query.update(given_post.dict(), synchronize_session=False)
    db.commit()
    return query.first()


# Delete
@router.delete("/{given_id}", status_code=204)
def delete_post(given_id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    query = db.query(models.Post).filter(models.Post.id == given_id)

    if query.first() is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"post with id: {given_id} does not exist"
        )
    query.delete()
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
