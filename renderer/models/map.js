module.exports = {
  namespace: 'map',
  state: {
    setView: true,
    center: [0, 0],
    zoom: 1,
    destinations: [{
      name: 'portland',
      center: [45.5231, -122.6765]
    }, {
      name: 'seattle',
      center: [47.606, -122.332]
    }, {
      name: 'vancouver',
      center: [49.2827, -123.1207]
    }, {
      name: 'juneau',
      center: [58.3019, -134.4197]
    }, {
      name: 'whitehorse',
      center: [60.7212, -135.0568]
    }],
    next: 0
  },
  reducers: {
    panAndZoom: (data, state) => {
      return { zoom: data.zoom, center: data.center }
    },
    next: (data, state) => {
      let current = state.next
      let next = current + 1
      if (current >= state.destinations.length - 1) next = 0
      console.log(current, next)

      return {
        zoom: 10,
        center: state.destinations[current].center,
        next: next
      }
    }
  }
}
