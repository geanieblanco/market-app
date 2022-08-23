// routes/api/organizers.js

const express = require('express')
const router = express.Router()

// Load Organizer model
const Organizer = require('../../models/organizer')

// @route GET api/organizers
// @description Get all organizers
// @access Public
router.get('/', (req, res) => {
  Organizer.find()
    .then((organizers) => res.json(organizers))
    .catch((err) =>
      res.status(404).json({ noorganizersfound: 'no organizers found' }),
    )
})

// @route GET api/organizers
// @description add/save organizer
// @access Public
router.post('/', (req, res) => {
  Organizer.create(req.body)
    .then((organizer) => res.json({ msg: 'Organizer added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this organizer' }),
    )
})

// @route GET api/organizers/:id
// @description Get single organizer by id
// @access Public
router.get('/find/:id', (req, res) => {
  Organizer.findById(req.params.id)
    .then((organizer) => res.json(organizer))
    .catch((err) =>
      res.status(404).json({ noorganizerfound: 'No Organizer found' }),
    )
})

// @route GET api/organizers/:id
// @description Update organizer
// @access Public
router.put('/update/:id', (req, res) => {
  Organizer.findByIdAndUpdate(req.params.id, req.body)
    .then((organizer) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' }),
    )
})

// @route GET api/organizers/:id
// @description Delete organizer by id
// @access Public
router.delete('/destroy/:id', (req, res) => {
  Organizer.findByIdAndRemove(req.params.id, req.body)
    .then((organizer) =>
      res.json({ mgs: 'Organizer entry deleted successfully' }),
    )
    .catch((err) => res.status(404).json({ error: 'No such a organizer' }))
})

module.exports = router
