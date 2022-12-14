// routes/api/events.js

const express = require('express')
const router = express.Router()

// Load Event model
const Event = require('../../models/event')

// @route GET api/events
// @description Get all events
// @access Public
router.get('/', (req, res) => {
  Event.find()
    .then((events) => res.json(events))
    .catch((err) => res.status(404).json({ noeventsfound: 'no events found' }))
})

// @route GET api/events
// @description add/save event
// @access Public
router.post('/', (req, res) => {
  Event.create(req.body)
    .then((event) => res.json({ msg: 'Event added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this event' }))
})

// @route GET api/events/:id
// @description Get single event by id
// @access Public
router.get('/find/:id', (req, res) => {
  Event.findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.status(404).json({ noeventfound: 'No Event found' }))
})

// @route GET api/events/:id
// @description Update event
// @access Public
router.put('/update/:id', (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then((event) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' }),
    )
})

// @route GET api/events/:id
// @description Delete event by id
// @access Public
router.delete('/destroy/:id', (req, res) => {
  Event.findByIdAndRemove(req.params.id, req.body)
    .then((event) => res.json({ mgs: 'Event entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a event' }))
})

module.exports = router
