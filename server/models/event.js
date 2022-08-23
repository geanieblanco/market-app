const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
  name: String,
})

module.exports = Event = mongoose.model('event', eventSchema)
