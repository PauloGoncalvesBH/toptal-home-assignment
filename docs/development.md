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

# Dockerization
In case you don't need to make changes in the app itself, you can just use Docker.

```sh
# Build the Docker image
$ docker build -t todo-lists .

# Run the container on localhost:4567
$ docker run --rm  -p 4567:4567 todo-lists
```
