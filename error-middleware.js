let serverError = function(error, request, response, next) {
  response
    .status(500)
    .json({error: "Server Error"})
}

let notFoundError = function(request, response, next) {
  response
    .status(404)
    .json({error: "Not Found"})
}

module.exports = { serverError, notFoundError }
