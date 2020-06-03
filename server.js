let express = require('express')
let app = new express()

let helmet = require('helmet')
app.use(helmet())

let compression = require('compression')
app.use(compression())

let router = require('./router')
app.use(router)

let static = express.static('public')
app.use(static)

let {serverError, notFoundError} = require('./error-middleware.js')
app.use(serverError)
app.use(notFoundError)

let server = app.listen(process.env.PORT)

server.on('listening', ()=> console.log("Listening"))
server.on('error', error=> console.error(error))

module.exports = server
