# Python API Development (freeCodeCamp.org)

## Links

- https://youtu.be/0sOvCWFmrtA
- https://www.freecodecamp.org/news/creating-apis-with-python-free-19-hour-course/
- https://github.com/Sanjeev-Thiyagarajan/fastapi-course
- https://github.com/shihab4t/social_media_api.py

## Notes

```py
from IPython import embed; embed()
```

```py
from IPython import embed as debug
```

## Features

- Authentication
- CRUD Operation
- Validation
- Documentation

## Stack

- Python, FastAPI
- PostgreSQL, SQLAlchemy

## Packages

- fastapi[all]
- pydantic
- psycopg
- sqlalchemy
- passlib[bcrypt]
- python-jose[cryptography]
- alembic

<!-- 
# Section 14: Deployment Ubuntu

- Create an Ubuntu VM
- Update packages
- Install Python
- Install Postgres & setup password
- Postgres Config
- Create new user and setup python environment
- Environment Variables
- Alembic migrations on production database
- Gunicorn
- Creating a Systemd service
- NGINX
- Setting up Domain name
- SSL/HTTPS
- NGINX enable
- Firewall
- Pushing code changes to Production
