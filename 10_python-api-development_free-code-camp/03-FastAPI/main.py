from fastapi import FastAPI, Response, status, HTTPException
from pydantic import BaseModel
from typing import Optional
from random import randrange


class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None


app = FastAPI()


my_post = [
    {
        "id": 1,
        "title": "title of post 1",
        "content": "content of post 1"
    },
    {
        "id": 2,
        "title": "title of post 2",
        "content": "content of post 2"
    }
]


def find_post(given_id: int):
    for post in my_post:
        if post.get("id") == given_id:
            return post


def find_post_index(given_id: int):
    for i in range(0, len(my_post)):
        if my_post[i]["id"] == given_id:
            return i


# Create
@app.post("/posts", status_code=status.HTTP_201_CREATED)
def create_post(post: Post):
    post = post.dict()
    post["id"] = randrange(0, 1000000)
    my_post.append(post)
    return {"data": post}


# Read
@app.get("/posts")
def get_posts():
    """Return all posts"""
    return {"data": my_post}


@app.get("/posts/latest")
def get_latest_post():
    return {"data": my_post[-1]}


@app.get("/posts/{given_id}")
def get_one_post(given_id: int):
    post = find_post(given_id)
    if post is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND,
                            f"post with id: {given_id} was not found")
        # response.status_code = status.HTTP_404_NOT_FOUND
        # return {"message": f"post with id: {given_id} was not found"}
    return {"post_details": post}


# Update
@app.put("/posts/{given_id}",)
def update_post(given_id: int, post: Post):
    index = find_post_index(given_id)
    print(index)
    if index is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND,
                            f"post with id: {given_id} was not found")
    post_dict = post.dict()
    post_dict["id"] = given_id
    my_post[index] = post_dict
    return {"data": post_dict}


# Delete
@app.delete("/posts/{given_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(given_id: int):
    post = find_post(given_id)
    if post is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"post with id: {given_id} does not exist")
    my_post.remove(post)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
