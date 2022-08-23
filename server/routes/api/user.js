// routes/api/users.js

const express = require('express')
const router = express.Router()

// Load User model
const User = require('../../models/user')

// @route GET api/users
// @description Get all users
// @access Public
router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: 'no users found' }))
})

// @route GET api/users
// @description add/save user
// @access Public
router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => res.json({ msg: 'User added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this user' }))
})

// @route GET api/users/:id
// @description Get single user by id
// @access Public
router.get('/find/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ nouserfound: 'No User found' }))
})

// @route GET api/users/:id
// @description Update user
// @access Public
router.put('/update/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' }),
    )
})

// @route GET api/users/:id
// @description Delete user by id
// @access Public
router.delete('/destroy/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then((user) => res.json({ mgs: 'User entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a user' }))
})

module.exports = router
