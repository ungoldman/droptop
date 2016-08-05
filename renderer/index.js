const choo = require('choo')
const log = require('choo-log')
const app = choo()

app.use(log())
app.model(require('./models/main'))
app.model(require('./models/map'))
app.router(route => [
  route('/', require('./pages/main'))
])

const tree = app.start()
document.body.appendChild(tree)
