const dbConfig = require('./db.config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.mongoURI, { useNewUrlParser: true })
    console.log('MongoDB is Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
