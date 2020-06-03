let express = require('express')
let router = new express.Router()

let createRoutes = data=> {
  let router = new express.Router()

  router.get('/', (request, response)=> {
    response.json(data)
  })

  router.get('/:id', (request, response)=> {
    let id = Number(request.params['id'])
    let item = data[id]
    if(item) response.json(item)
    else response.json({error: 'Not Found'})
  })

  return router
}

;['weapons', 'armor', 'accessories'].forEach(resource=> {
  let data = require(`./db/${resource}.json`)
  router.use('/' + resource, createRoutes(data))
})

module.exports = router
