# Section 11: Database Migration w/ Alembic

- What is a database migration tool
- Alembic Setup
- Alembic First Revision
- Alembic Rollback database Schema
- Alembic finishing up the rest of the schema
- Disable SqlAlchemy create Engine

## Database Migrations

- Developers can track changes to code and rollback code easily with Git. Why can't we do the same for database model/tables
- Database migrations allow us to incrementally track changes to database schema and rollback changes to any point in time.
- We will use a tool called Alembic to make changes to our database.
- Alembic can also automatically pull database models from SQLAlchemy and generate the proper tables
