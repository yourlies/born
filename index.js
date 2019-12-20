const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const fs = require('fs')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./core/router')

const files = fs.readdirSync('./pages/mainer')

const header = fs.readFileSync('./pages/public/header.html', 'utf-8')
const author = fs.readFileSync('./pages/public/author.html', 'utf-8')
const stylesheet = fs.readFileSync('./pages/public/stylesheet.html', 'utf-8')

files.filter(file => file.endsWith('.html')).forEach(file => {})
const handler = function(ctx) {
  const context = fs.readFileSync(`./pages/mainer/${file}`, 'utf-8')
  const body = `<html><head>${header}${stylesheet}</head><body><div id="wrapper">${author}${context}</div></body></html>`
  ctx.body = body
}

app.use(bodyParser())
app.use(static(path.join(__dirname, 'pages')))
app.use(...router(handler))
app.listen(3000)
