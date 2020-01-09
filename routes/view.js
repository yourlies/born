const Parent = require('../core/index')
const createPagination = require('../plugin/pagination')

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
    const pagination = createPagination(1, 10, 20)
    this.metas('index', 'css')
    this.metas('profile', 'profile')
    this.footView(pagination)
    this.foots('weather')
    const view = this.views('index')
    return this.response(view)
  }
}

module.exports = View
