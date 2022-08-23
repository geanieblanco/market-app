const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express()
const port = process.env.PORT || 8082

// routes
const users = require('./routes/api/user')
const events = require('./routes/api/event')
const organizers = require('./routes/api/organizer')
const vendors = require('./routes/api/vendor')

connectDB()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }))

app.use('/api/users', users)
// app.use('/api/events', events)
// app.use('/api/vendors', vendors)
// app.use('/api/organizers', organizers)

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => console.log(`Server running on port ${port}`))
