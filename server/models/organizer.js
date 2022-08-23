const mongoose = require('mongoose')
const { Schema } = mongoose

const organizerSchema = new Schema({
  name: String,
})

module.exports = Organizer = mongoose.model('organizer', organizerSchema)
