# Healtcare Information System API

Healtcare Information System API for Software Engineer Academy at COMPFEST 13

Login as Admin:

- username: admin
- password: admin123

## Prerequisites

1. Node v14 >=
2. npm
3. Docker/Docker Desktop
4. docker-compose
5. Linux/WSL2

## Getting started

### Development

Change `.env.example` to `.env`

#### Docker

First of all, configure environment variable that use in container and database

```bash
MONGO_USERNAME=name # database username
MONGO_PASSWORD=password # database password
MONGO_HOSTNAME=127.0.0.1 # change to container name if thats an error when run locally
MONGO_PORT=27017
MONGO_DB=healthcare # your database name
PORT=9191 # app port
SECRET_KEY=compfest13 # change this to more secure secret key
```

After that, start database service

```bash
docker-compose up -d --build db
```

Then, check if service run successfully

```bash
docker logs his_db
```

after that, run development server on localhost:9191

```bash
npm start
```

To stop database service

```
docker-compose rm -s -v db
```

To stop development server use `Ctrl+C` and type `Y`

#### Using with MongoDB Atlas

```bash
MONGO_USERNAME=name # database username
MONGO_PASSWORD=password # database password
MONGO_HOSTNAME_ATLAS=compfest.cluster.mongodb.net # change to your cluster at MongoDB Atlas
MONGO_PORT=27017
MONGO_DB=healthcare # your database name
PORT=9191 # app port
SECRET_KEY=compfest13 # change this to more secure secret key
```

Learn more about [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/)

### Deployment

You can use docker to deploy using nginx, but since it's to complex for me, I'll use Heroku and MongoDB Atlas to deploy it

#### Docker

Configure your own nginx image and docker-compose file

```bash
docker-compose up -d --build
```

#### Database with MongoDB Atlas

Get started with [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/)

#### Node.js with Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Learn more about deploying [Node.js to Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

## Available Endpoint

See all availables endpoint with the example in `./Healthcare Information System.postman_collection.json`

## Built using

- [express](https://expressjs.com/) as Node.js framework
- [express-validator](https://express-validator.github.io/) as validator for all incoming request
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) as an implementation of JSON Web Tokens.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs/v/2.4.3) for hash a password. n.b: use this cause bcrypt required a lot of configuration to run with docker
- [mongoose](https://mongoosejs.com/) as MongoDB object modeling
- [MongoDB](https://wwww.mongodb.com) as NoSQL database

## Development tools

- nodemon for hot reload
- Husky is a git hooks, for example we run `git commit` it's run pre-commit hooks to lint and format document before commit to repository
- lint-staged to run linter and formatter

## Coding Guidelines

- Eslint for static analysis to avoid typo/syntax error
- Prettier for code formatting

## Project Structure

- `src/config` - Configuration for database
- `src/controllers` - Business logic
- `src/middleware` - Middleware to process incoming request
  - `src/middleware/validator` - Middleware to validate incoming request
- `src/model` - Database model
- `src/routes` - Routes to access controller
- `src/utils` - Helper functions

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)

## License

MIT
