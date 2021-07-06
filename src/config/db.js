import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } =
  process.env

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // reconnectTries: Number.MAX_VALUE,
  // reconnectInterval: 1000,
  connectTimeoutMS: 10000,
}

const URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
mongoose
  .connect(URL, options)
  .then(() => {
    console.log('Database is connected')
  })
  .catch((err) => {
    console.error(err)
  })
// mongoose.Promise = global.Promise

export default mongoose
