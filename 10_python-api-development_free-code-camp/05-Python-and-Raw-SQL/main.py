from fastapi import status
from fastapi import FastAPI, Response, HTTPException
from pydantic import BaseModel
from psycopg2.extras import RealDictCursor
import psycopg2
import time


class Post(BaseModel):
    title: str
    content: str
    published: bool = True


while True:
    try:
        conn = psycopg2.connect(
            host="127.0.0.1",
            database="python_api_development",
            user="postgres",
            password="2611postgres",
            cursor_factory=RealDictCursor
        )
        cursor = conn.cursor()
        print("Database connection was succesfull!")
        break
    except Exception as error:
        print("Connecting to database failed")
        print("Error:", error)
        time.sleep(2)


app = FastAPI()


# Create
@app.post("/posts", status_code=status.HTTP_201_CREATED)
def create_post(post: Post):
    cursor.execute(
        """
            INSERT INTO posts (title, content, published)
            VALUES (%s, %s, %s)
            RETURNING *;
        """,
        (
            post.title,
            post.content,
            post.published
        )
    )
    new_post = cursor.fetchone()
    conn.commit()
    return {"data": new_post}


# Read
@app.get("/posts")
def get_posts():
    cursor.execute(
        """
            SELECT * 
            FROM posts;
        """
    )
    posts = cursor.fetchall()
    return {"data": posts}


@app.get("/posts/latest")
def get_latest_post():
    cursor.execute(
        """
            SELECT *
            FROM posts
            ORDER BY id DESC
            LIMIT 1
        """
    )
    post = cursor.fetchone()
    return {"data": post}


@app.get("/posts/{given_id}")
def get_one_post(given_id: int):
    cursor.execute(
        """
            SELECT *
            FROM posts
            WHERE id = %s;
        """, (
            str(given_id),
        )
    )
    post = cursor.fetchone()
    if post is None:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND,
            f"post with id: {given_id} was not found"
        )
    return {"post_details": post}


# Update
@app.put("/posts/{given_id}",)
def update_post(given_id: int, post: Post):
    cursor.execute(
        """
            UPDATE posts
            SET title = %s,
                content = %s,
                published = %s
            WHERE id = %s
            RETURNING *;
        """,
        (
            post.title,
            post.content,
            post.published,
            str(given_id)
        )
    )
    update_post = cursor.fetchone()
    conn.commit()
    if update_post is None:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND,
            f"post with id: {given_id} was not found"
        )
    return {"data": update_post}


# Delete
@app.delete("/posts/{given_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(given_id: int):
    cursor.execute(
        """
            DELETE FROM posts
            WHERE id = %s
            RETURNING *;
        """,
        (
            str(given_id),
        )
    )
    deleted_post = cursor.fetchone()
    conn.commit()
    if deleted_post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"post with id: {given_id} does not exist"
        )
    return Response(status_code=status.HTTP_204_NO_CONTENT)
