const View = require('./view')
const view = new View()
const response = function(method) {
  return view[method]()
}

module.exports = { response }
