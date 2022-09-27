const exp = require('constants')
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

// Express middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// Default response for any other request (Not Found)
// Place this after all other routes so that itx doesn't override the others
app.use((req, res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})