const Parent = require('../core/index')

class View extends Parent {
  constructor() {
    super()
  }
  index() {
    this.metas('index', 'css')
    this.metas('profile', 'profile')
    const view = this.views('index')
    return this.response(view)
  }
}

module.exports = View
