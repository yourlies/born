const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./core/router').route
const { response } = require('./routes/index')

const handler = function(ctx, method) {
  const url = ctx.req.url
  ctx.body = response(method || path.basename(url).replace('.html', ''), Object.values(ctx.params))
}

app.use(bodyParser())
app.use(static(path.join(__dirname, 'pages')))
app.use(...router(handler))
app.listen(2333)
