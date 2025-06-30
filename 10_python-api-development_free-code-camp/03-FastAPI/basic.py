from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import IPython


class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None


app = FastAPI()


@app.get("/")
def root():
    """This is Root Path operation"""
    return {"message": "Hello World"}


@app.get("/posts")
def get_posts():
    return {"data": "This is posts"}


@app.post("/posts/create")
def create_post(body: Post):
    print(body.dict())
    return {"new_post": body}
