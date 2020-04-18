const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Henlo world")
})

console.log('This is app.js')

app.listen(process.env.PORT || 3000, () => console.log('server running boi'))

module.exports = app
