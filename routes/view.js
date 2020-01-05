const Parent = require('../core/index')

class View extends Parent {
  constructor() {
    super()
  }
  article(name) {
    this.metas('analysis', 'css')
    this.metas('author', 'profile')
    this.foots('weather')
    const view = this.views(name)
    return this.response(view)
  }
  index() {
    this.metas('index', 'css')
    this.metas('profile', 'profile')
    this.foots('weather')
    const view = this.views('index')
    return this.response(view)
  }
}

module.exports = View
