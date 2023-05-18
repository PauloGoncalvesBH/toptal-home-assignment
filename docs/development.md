# Development

## Front-end
It runs on port 3030 and proxies unknown requests to the back-end, which is running on port 4567.

```sh
# Install packages (once)
$ yarn install

# Start development server on port 3030
# Make sure to have the back-end running separately
$ yarn start

# Build the app when development is done
# Optional: needed for testing purposes with sinatra as the entry point
$ yarn build
```

## Back-end
It runs on port 4567 and serves static assets (including the default route) from front-end's `build` directory.

```sh
# Move to the base-folder for the back-end
$ cd backend

# Install packages (once)
$ bundle install

# Start the server
$ bundle exec ruby server.rb
```

## Dockerization
In case you don't need to make changes in the app itself, you can just use Docker.

```sh
# Build the Docker image
$ docker build -t todo-lists .

# Run the container on localhost:4567
$ docker run --rm -p 4567:4567 todo-lists
```

Or, if you have [docker compose](https://docs.docker.com/compose/install/) installed, you can just run:
```sh
$ make start-app
```

## Integration testing

Tests are important to ensure the integrity of the project with each change made. It is important that you pay attention that your change requires new tests or adaptation of the existing ones.

API tests were implemented in Ruby using [httparty](https://www.ruby-lang.org/en/downloads/).

### Running API tests using only Ruby

**Prerequisites:**
- [Ruby](https://www.ruby-lang.org/en/downloads/) installed.
- Application running on port _4567_ (see sections [Front-end](#front-end) and [Back-end](#back-end) or [Dockerization](#dockerization)).

**Steps to run all API tests:**

```sh
# Move to the folder where API tests are
$ cd tests/api

# Install packages
$ bundle install

# Run all API tests
$ bundle exec rspec spec/test
```
___

### Running API tests through Docker

When using docker it is no longer necessary to follow the step by step how to run the backend and frontend before running the API tests. The structure itself created in [docker-compose](../docker-compose.yml) guarantees that the application will be running before the test is executed.

**Prerequisites:**
- [docker](https://docs.docker.com/get-docker/) installed.
- [docker compose](https://docs.docker.com/compose/install/) installed.

**Steps to run all API tests:**

```sh
# Build backend, frontend, integration test images and run all API tests 
$ make test-api
```

## E2E testing

E2E tests were implemented using [playwright](https://playwright.dev/).

### Prerequisites

- [docker](https://docs.docker.com/get-docker/) installed.
- [docker compose](https://docs.docker.com/compose/install/) installed.

### Steps to run all E2E tests

```sh
# Build backend, frontend, e2e test images and run all e2e tests 
$ make test-e2e
```

## Visual regression testing

Visual regression tests were implemented using [playwright](https://playwright.dev/).

The visual regression test behaves similarly to the E2E tests, but has a different objective. Visual testing verifies that the software's user interface appears correctly to all users.

### Prerequisites

- [docker](https://docs.docker.com/get-docker/) installed.
- [docker compose](https://docs.docker.com/compose/install/) installed.

### Note

The visual regression tests implemented use the most common desktop resolutions:
- _1024x768_
- _1920x1080_

> Each visual regression test runs 2 times, 1 for each resolution.

### Steps to run all visual tests

```sh
# Build backend, frontend, visual test images and run all visual tests 
$ make test-visual
```
