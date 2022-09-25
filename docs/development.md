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

## Tests

Tests are important to ensure the integrity of the project with each change made. It is important that you pay attention that your change requires new tests or adaptation of the existing ones.

### Integration testing

API tests were implemented in Ruby using [httparty](https://www.ruby-lang.org/en/downloads/).

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

You will see the test result in the CLI.
