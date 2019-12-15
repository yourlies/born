const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const fs = require('fs')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const app = new Koa()

const header = fs.readFileSync('./pages/public/header.html', 'utf-8')
const author = fs.readFileSync('./pages/public/author.html', 'utf-8')
const stylesheet = fs.readFileSync('./pages/public/stylesheet.html', 'utf-8')
const context = fs.readFileSync('./pages/mainer/promise.html', 'utf-8')
const body = `<html><head>${header}${stylesheet}</head><body><div id="wrapper">${author}${context}</div></body></html>`

router.get('/', ctx => {
  ctx.body = body
})
app.use(bodyParser())
app.use(static(path.join(__dirname, 'pages')))
app.use(router.routes(), router.allowedMethods())
app.listen(3000)
