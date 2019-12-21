const fs = require('fs')
class Index {
  constructor() {
    this.header = this.readFileSync('./pages/public/header.html', 'utf-8')
    this.profile = this.readFileSync('./pages/public/author.html', 'utf-8')
    this.stylesheet = [this.readFileSync('./pages/public/stylesheet.html', 'utf-8')]
  }
  readFileSync() {
    return fs.readFileSync(...arguments)
  }
  metas(name, type) {
    switch (type) {
      case 'css':
        this.stylesheet.push(`<link rel="stylesheet" href="./static/${name}.css" type="text/css" />`)
        break
      case 'profile':
        this.profile = this.readFileSync(`./pages/public/${name}.html`, 'utf-8')
        break
    }
  }
  views(name) {
    return this.readFileSync(`./pages/views/${name}.html`, 'utf-8')
  }
  content(body) {
    return `<html><head>${this.header}${this.stylesheet.join('')}</head><body><div id="wrapper">${this.profile}${body}</div></body></html>`
  }
  response(body) {
    return this.content(body)
  }
}

module.exports = Index
