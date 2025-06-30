# Section 10: Vote/Like System

- Vote/Like Theory
- Votes Table
- Votes Sqlalchemy
- Votes Route
- SQL Joins
- Joins in SqlAlchemy
- Get One Post with Joins

## Voting/Likes System Requirements

- Users should be able to like a post
- Should only be able to like a post onece
- Retrieving posts should also fetch the total number of likes

## Vote Model

- Column referencing post id
- Column referencing id of user who liked the post
- A user should only be able to like a post once so thig means we need t oensure every post id/voteer id is a unique combination

## Composite Keys

- Primary Key that spans multiple columns
- Since Primary Keys must be unique, this will ensure no user can like a post twice

## SQL Join

```sql
SELECT *
FROM posts LEFT JOIN users
	ON posts.owner_id = users.id;

SELECT title, content, email
FROM posts LEFT JOIN users
	ON posts.owner_id = users.id;

SELECT posts.id, users.email
FROM posts LEFT JOIN users
	ON posts.owner_id = users.id;

SELECT posts.*, email
FROM posts LEFT JOIN users
	ON posts.owner_id = users.id;


SELECT posts.*, email
FROM posts RIGHT JOIN users
	ON posts.owner_id = users.id;

    SELECT *
FROM posts LEFT JOIN users
	ON posts.owner_id = users.id;

SELECT title, content, email
FROM posts LEFT JOIN users
	ON posts.owner_id = users.id;

SELECT posts.id, users.email
FROM posts LEFT JOIN users
	ON posts.owner_id = users.id;

SELECT posts.*, email
FROM posts LEFT JOIN users
	ON posts.owner_id = users.id;

SELECT posts.*, email
FROM posts RIGHT JOIN users
	ON posts.owner_id = users.id;

SELECT users.id, users.email,
	COUNT(posts.id) as users_posts_count
FROM posts RIGHT JOIN users
	ON posts.owner_id = users.id
GROUP BY users.id;

SELECT posts.*, COUNT(votes.post_id) as votes
FROM posts LEFT JOIN votes
	ON posts.id = votes.post_id
GROUP BY posts.id;

SELECT posts.*, COUNT(votes.post_id) as votes
FROM posts LEFT JOIN votes
	ON posts.id = votes.post_id
WHERE posts.id = 5
GROUP BY posts.id;
```
