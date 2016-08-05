var html = require('choo/html')

module.exports = function nav (state, prev, send) {
  let city = state.map.destinations[state.map.next].name
  let click = () => send('map:next')

  return html`<button class="btn" onclick=${click}>go to ${city}!</button>`
}
