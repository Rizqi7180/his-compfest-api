import dotenv from 'dotenv'
import mongoose from 'mongoose'
import User from '../model/User.model.js'

dotenv.config()

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_HOSTNAME_ATLAS,
  MONGO_PORT,
  MONGO_DB,
} = process.env

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
  useFindAndModify: false,
}

// Use with docker
const DOCKER_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

//Use with MongoDB Atlas
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME_ATLAS}/${MONGO_DB}?retryWrites=true&w=majority`

mongoose
  .connect(MONGO_URI, options)
  .then(async () => {
    console.log('Database is connected')

    const isAdminExists = await User.exists({
      email: 'admin@mail.com',
      username: 'admin',
      role: 'admin',
    })

    if (isAdminExists) {
      console.log('User admin already created')
      return
    }

    const admin = await User.create({
      first_name: 'admin',
      last_name: 'tamvan',
      email: 'admin@mail.com',
      age: 21,
      username: 'admin',
      password: 'admin123',
      role: 'admin',
    })

    if (admin) {
      console.log('User admin created successfully')
    } else {
      console.log('User admin failed to create')
    }
  })
  .catch((err) => {
    console.error(err)
  })

export default mongoose
