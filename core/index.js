const fs = require('fs')
class Index {
  constructor() {
    this.header = this.readFileSync('./pages/public/header.html', 'utf-8')
    this.profile = this.readFileSync('./pages/public/author.html', 'utf-8')
    this.stylesheet = [this.readFileSync('./pages/public/stylesheet.html', 'utf-8')]
    this.footer = []
    this.main = []
  }
  readFileSync() {
    return fs.readFileSync(...arguments)
  }
  metas(name, type) {
    switch (type) {
      case 'css':
        this.stylesheet.push(`<link rel="stylesheet" href="/static/${name}.css" type="text/css" />`)
        break
      case 'profile':
        this.profile = this.readFileSync(`./pages/public/${name}.html`, 'utf-8')
        break
    }
  }
  foots(name) {
    this.footer.push(this.readFileSync(`./pages/public/${name}.html`, 'utf-8'))
  }
  footView(innerHTML) {
    this.footer.push(innerHTML)
  }
  mainView(innerHTML) {
    this.main.push(innerHTML)
  }
  views(name) {
    const body = this.main.length > 0 ? `<div class="main">${this.main.join('')}</div>` : this.readFileSync(`./pages/views/${name}.html`, 'utf-8')
    return this.content(body)
  }
  content(body) {
    const content = `<html><head>${this.header}${this.stylesheet.join('')}</head><body><div id="wrapper">${this.profile}${body}${this.footer.join('')}</div></body></html>`
    this.footer = []
    this.main = []
    this.stylesheet = [this.readFileSync('./pages/public/stylesheet.html', 'utf-8')]
    return content
  }
  response(content) {
    return content
  }
}

module.exports = Index
