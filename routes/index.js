const View = require('./view')
const view = new View()
const response = function(method) {
  if (typeof view[method] == 'function') {
    return view[method]()
  } else {
    return view.article(method)
  }
}

module.exports = { response }
