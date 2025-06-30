# Section 6: ORMs
* ORM intro
* SQLALCHEMY setup
* Adding CreatedAt Column
* Get All Posts
* Create Posts
* Get Post by ID
* Delete Post
* Update Post

## Object Relational Mapper (ORM)
* Layer of abstraction that sits between the database and us
* We can perform all database operations throught traditional python code. NO more SQL!

## What cn ORMs Do
* Instead of amnually defining tables in postgres, we can define our tables as python models
* Queries can be made exclusively throught python code. No SQL is necessary.

## SQLAlchemy
* SQLAlchemy is one of the most popular python ORMs
* It is a standalone library and has no association wiht FastAPI. it can be used iwht any other python web frameworkds or any python based application.
