const express = require('express')
// Imports the bookmark controller
const bookmarksController = require('./controllers/bookmarksController')
const petsController = require('./controllers/petsController')

// CORS is used to accept request that allows our frontend to receive data from our backend.
const cors = require('cors')

// Create an instance of the express server
const app = express()


// Middleware
app.use(cors())


// express.json() tells our app to accept incoming JSON from requests (POST and PUT)
app.use(express.json())

// Whenever the URL starts with: localhost:4001/bookmarks -- hand the request off the bookmarksController to route it appropriately
app.use('/bookmarks', bookmarksController)

// localhost:4001/pets - we hand the request off to the petsController
app.use('/pets', petsController)

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Bookmarks App!')
})




module.exports = app