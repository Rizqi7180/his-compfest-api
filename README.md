# Healtcare Information System API

Healtcare Information System API for Software Engineer Academy at COMPFEST 13

## Demo

```
https://his-compfest.vercel.app
```

Admin:

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

After that, go to `/src/config/db.js` and change mongoose connect to

```js
mongoose.connect(DOCKER_URI, options)
```

Start database service

```bash
docker-compose up -d --build db
```

Then, check if service run successfully

```bash
docker logs his_db
```

After that, run development server on localhost:9191

```bash
npm start
```

To stop database service

```
docker-compose rm -s -v db
```

To stop development server use `Ctrl+C` and type `Y`

#### Using with MongoDB Atlas

If you prefer using MongoDB Atlas (See [Database with MongoDB Atlas](#database-with-mongodb-atlas) to create it), configure following variables in your `.env` file

```bash
MONGO_USERNAME=name # database username
MONGO_PASSWORD=password # database password
MONGO_HOSTNAME_ATLAS=compfest.cluster.mongodb.net # change to your cluster at MongoDB Atlas
MONGO_PORT=27017
MONGO_DB=healthcare # your database name
PORT=9191 # app port
SECRET_KEY=compfest13 # change this to more secure secret key
```

After that, run development sever on localhost:9191

```bash
npm start
```

### Deployment

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

You can use docker to deploy using nginx, but since it's to complex for me, I'll use Heroku and MongoDB Atlas to deploy it

#### Docker

If you want to try on your own, configure your own nginx reverse proxy and docker-compose file then run:

```bash
docker-compose up -d --build
```

#### Database with MongoDB Atlas

If you prefer use MongoDB Atlas

1. Create an Atlas account.
2. Deploy a Free Tier Cluster.
3. Add your connection IP Address to your IP access list.
4. Create a database user for your Ccluster.
5. Connect to your cluster with adding detail environment variables in `.env` for development (See [Using with MongoDB Atlas](#using-with-mongodb-atlas)) and add to your Heroku project setting configuration for production

#### Node.js with Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```

If theres an application error, make sure you configure environment variables in your Heroku project setting

Learn more about deploying [Node.js to Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

## API References

Go to [Healthcare Information System API](https://his-compfest-api.herokuapp.com) or if you want to try it in Postman or somewhere else, see all availables API endpoint with the example in `./Healthcare Information System.postman_collection.json` and change the URL to using your own or just use `https://his-compfest-api.herokuapp.com`

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

## References

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)

## License

MIT
