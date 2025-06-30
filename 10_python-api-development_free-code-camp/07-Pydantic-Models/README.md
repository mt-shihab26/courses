# Section 7: Pydantic Models
* Pydantic vs ORM Models
* Pydantic Models Deep Dive
* Response Model

## Schema Models
* Schema/Pydantic Models define the structure of a request & response
* This ensure that when a use r wants to create a post, the request will only go throught if it has a "title" and "content" in the body.

## SQLAlchemy Models
* Responsible for defining the columns of our "posts" table within PostgrSQL
* Is used to query, crate, delete, and update entries within the database.
