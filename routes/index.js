const View = require('./view')
const view = new View()
const response = function(method, params) {
  if (typeof view[method] == 'function') {
    return view[method](...params)
  } else {
    return view.article(method)
  }
}

module.exports = { response }
