# Healtcare Information System API

Healtcare Information System API for Software Engineer Academy at COMPFEST 13

## Prerequisites

1. Node v14 >=
2. npm
3. Docker/Docker Desktop
4. docker-compose
5. Linux/WSL2

## Getting started

### Development

First, start database service

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

### Deployment

First of all, change `Caddyfile` to use your domain and check if port 9191 is available to use.

Run all container

```bash
docker-compose up -d --build
```

## Built with

- [express](https://expressjs.com/) as Node.js framework
- [express-validator](https://express-validator.github.io/) as validator for all incoming request
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) as an implementation of JSON Web Tokens.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs/v/2.4.3) for hash a password. n.b: use this cause bcrypt required a lot of configuration to run with docker
- [mongoose](https://mongoosejs.com/) as MongoDB object modeling
- [MongoDB](https://wwww.mongodb.com) as NoSQL database

### Development tools

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
