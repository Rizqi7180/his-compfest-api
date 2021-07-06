db.createUser({
  user: 'ammar',
  pwd: 'ammarcompfest',
  roles: [{ role: 'readWrite', db: 'healthcare' }],
  passwordDigestor: 'server',
})

db.auth('ammar', 'ammarcompfest')
db = new Mongo().getDB('healthcare')

db.user.insertOne({
  role: 'admin',
  first_name: 'admin',
  last_name: 'admin',
  email: 'admin@mail.com',
  age: 21,
  username: 'admin',
  password: '$2a$10$2CQZAzYRLYKvNeLmmYgMkuA8oo.9Ry3U/1j1PNr9TXzK0IUZxQPdS',
})
