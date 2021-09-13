const express = require('express')
const serverStatic =  require('serve-static')
const path = require('path')

const app = express()

//here we are configure dist to serve app files
app.use('/', serverStatic(path.join(__dirname, '/dist')))

//this * route to serve project on different page route except root '/'
app.get(/.*/, function(req, res){
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)