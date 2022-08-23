const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  userPhoto: {
    type: String,
  },
  joinDate: {
    type: String,
  },
  lastAccessed: {
    type: String,
  },
  lastAccessedLoc: {
    type: String,
  },
  activity: [
    {
      date: {
        type: String,
      },
      deviceType: {
        type: String,
      },
      location: {
        type: String,
      },
    },
  ],
  createdEvents: [
    {
      type: Boolean,
      events: [],
    },
  ],
  createdOrganizers: [
    {
      type: Boolean,
      events: [],
    },
  ],
  createdVendors: [
    {
      type: Boolean,
      events: [],
    },
  ],
  followedOrganizers: [
    {
      type: Boolean,
      events: [],
    },
  ],
  favoritedVendors: [
    {
      type: Boolean,
      events: [],
    },
  ],
  subscribedEvents: [
    {
      type: Boolean,
      events: [
        {
          id: Number,
          activity: [
            {
              response: {
                type: String,
              },
              date: {
                type: String,
              },
            },
          ],
        },
      ],
    },
  ],
})

module.exports = User = mongoose.model('user', userSchema)
