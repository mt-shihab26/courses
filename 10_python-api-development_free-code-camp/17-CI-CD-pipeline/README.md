# Section 17: CI/CD pipeline

- CI/CD intro
- Github Actions
- Creating Jobs
- Setup python/dependencies/pytest
- Environment variables
- Github Secrets
- Testing database
- Building Docker images
- Deploy to Heroku
- Failing tests in pipeline
- Deploy to Ubuntu

## What is CI/CD

- Continuous Integration: Automated process to build, package and test applications
- Continuous Delivery: Picks up where continuous integration ends and automated the delivery of applications

## CI/CD Tools

- We will be using Github Actions ofr cour CI/CD pipeline
- It's already integrated with Our Github repo and it's hosted on Github so there's not need to install anything on our local machine

## What does a CI/CD tool do?

- All CI/CD platforms are dead simple
- They provide a runner - Nothing more than a computer(VM) to run a bunch of commands we specify
- These commands are either usually configured in a YAML/JSON file of through a gui
- The different steps/commands we provide makeup all of the actions our pipeline will perform
- The pipeline will be triggered based off of some event (git push / merge)
