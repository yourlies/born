const Parent = require('../core/index')
const render = require('../plugin/render')

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
  index(id = 1) {
    const titles = this.selectTitles()
    const pagination = render.pagination(id - 0, 4, titles.length - 1, '/page/:id')
    const articleItems = render.articleItems(titles)
    this.metas('index', 'css')
    this.metas('profile', 'profile')
    this.footView(pagination)
    this.foots('weather')
    this.mainView(articleItems)
    const view = this.views('index')
    return this.response(view)
  }
  selectTitles() {
    const titles = [
      { id: 0, title: 'javascript事件之async/await', desc: 'Oct 18, 2019', path: '/await.html' },
      { id: 1, title: 'javascript事件之promise前世今生', desc: 'Oct 17, 2019', path: '/promise.html' },
      { id: 2, title: 'javascript事件之Event Loop', desc: 'Oct 15, 2019', path: '/async.html' },
      { id: 3, title: '如何做一个mvvm框架', desc: 'Jan 21, 2018', path: '/frame.html' },
      { id: 4, title: '我的作品', desc: '', path: '/project', top: true }
    ]
    return this.response(titles)
  }
}

module.exports = View
