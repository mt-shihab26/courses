from fastapi import status
from fastapi import FastAPI, Response, HTTPException, Depends
from . import models
from .database import engine, get_db
from sqlalchemy.orm import Session
from sqlalchemy.sql import desc
from . import models
from pydantic import BaseModel


models.Base.metadata.create_all(bind=engine)

app = FastAPI()


class Post(BaseModel):
    title: str
    content: str
    published: bool = True


# Create
@app.post("/posts", status_code=status.HTTP_201_CREATED)
def create_post(post: Post, db: Session = Depends(get_db)):
    new_post = models.Post(**post.dict())
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return {"data": new_post}


# Read
@app.get("/posts")
def get_posts(db: Session = Depends(get_db)):
    posts = db.query(models.Post).all()
    return {"data": posts}


@app.get("/posts/latest")
def get_latest_post(db: Session = Depends(get_db)):
    post = db.query(models.Post).order_by(desc(models.Post.create_at)).first()
    return {"data": post}


@app.get("/posts/{given_id}")
def get_one_post(given_id: int, db: Session = Depends(get_db)):
    post = db.query(models.Post).filter(models.Post.id == given_id).first()
    if post is None:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND,
            f"post with id: {given_id} was not found"
        )
    return {"post_details": post}


# Update
@app.put("/posts/{given_id}",)
def update_post(given_id: int, update_post: Post, db: Session = Depends(get_db)):
    query = db.query(models.Post).filter(models.Post.id == given_id)
    post = query.first()
    if post is None:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND,
            f"post with id: {given_id} was not found"
        )
    query.update(update_post.dict(), synchronize_session=False)
    db.commit()
    return {"data": query.first()}


# Delete
@app.delete("/posts/{given_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(given_id: int, db: Session = Depends(get_db)):
    query = db.query(models.Post).filter(models.Post.id == given_id)

    if query.first() is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"post with id: {given_id} does not exist"
        )
    query.delete()
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
