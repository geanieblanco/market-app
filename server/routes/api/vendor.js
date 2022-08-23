// routes/api/vendors.js

const express = require('express')
const router = express.Router()

// Load Vendor model
const Vendor = require('../../models/vendor')

// @route GET api/vendors
// @description Get all vendors
// @access Public
router.get('/', (req, res) => {
  Vendor.find()
    .then((vendors) => res.json(vendors))
    .catch((err) =>
      res.status(404).json({ novendorsfound: 'no vendors found' }),
    )
})

// @route GET api/vendors
// @description add/save vendor
// @access Public
router.post('/', (req, res) => {
  Vendor.create(req.body)
    .then((vendor) => res.json({ msg: 'Vendor added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this vendor' }),
    )
})

// @route GET api/vendors/:id
// @description Get single vendor by id
// @access Public
router.get('/find/:id', (req, res) => {
  Vendor.findById(req.params.id)
    .then((vendor) => res.json(vendor))
    .catch((err) => res.status(404).json({ novendorfound: 'No Vendor found' }))
})

// @route GET api/vendors/:id
// @description Update vendor
// @access Public
router.put('/update/:id', (req, res) => {
  Vendor.findByIdAndUpdate(req.params.id, req.body)
    .then((vendor) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' }),
    )
})

// @route GET api/vendors/:id
// @description Delete vendor by id
// @access Public
router.delete('/destroy/:id', (req, res) => {
  Vendor.findByIdAndRemove(req.params.id, req.body)
    .then((vendor) => res.json({ mgs: 'Vendor entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a vendor' }))
})

module.exports = router
