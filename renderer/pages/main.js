const html = require('choo/html')
const nav = require('../elements/nav')
const createMapView = require('../elements/map')
const initialMapState = require('../models/map').state
const map = createMapView({
  initialState: initialMapState
})

module.exports = (state, prev, send) => html`
  <div class="app">
    ${nav(state, prev, send)}
    ${map(state, prev, send)}
  </div>
`
