const mongoose = require('mongoose')
const { Schema } = mongoose

const vendorSchema = new Schema({
  name: String,
})

module.exports = Vendor = mongoose.model('vendor', vendorSchema)
