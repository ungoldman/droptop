var L = require('leaflet')
var html = require('choo/html')

module.exports = function createMapView (options) {
  function onload (node) {
    map.invalidateSize()
  }

  var el = html`<div onload=${onload} id="map"></div>`
  var map = createMap(el, options.initialState)

  return function mapView (state, prev, send) {
    map.setZoom(state.map.zoom)
    map.panTo(state.map.center)
    return html`<div class="map-wrapper">${el}</div>`
  }
}

function createMap (id, options) {
  var map = L.map(id, options)

  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd'
  }).addTo(map)

  return map
}
