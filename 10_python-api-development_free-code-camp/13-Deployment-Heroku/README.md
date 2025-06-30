# Section 13: Deployment Heroku

- Heroku intro
- Create Heroku App
- Heroku procfile
- Adding a Postgres database
- Environment Variables in Heroku
- Alembic migrations on Heroku Postgres instance
- Pushing changed to production

## To deploy

- `git push heroku main`
- `heroku run "alembic upgrade head"`
- `heroku logs -t`
- `heroku ps:restart`
- `heroku apps:info`
