import mongoose from 'mongoose'

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } =
  process.env

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  connectTimeoutMS: 10000,
}

const URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`

// function connect() {
//   return mongoose.connect(URL, options)
// }

mongoose
  .connect(URL, options)
  .then(() => {
    console.log('Database is connected')
  })
  .catch((err) => {
    console.error(err)
  })

export default mongoose
