const { LMap, LTileLayer, LMarker } = Vue2Leaflet;

new Vue({
  el: '#app',
  components: { LMap, LTileLayer, LMarker },

  data: {
    map: {
      zoom:13,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    },
    markers: []
  },

  created() {
    ///
    for (let i = 0; i < 20; i++) {
      this.markers.push({
        id: i,
        latLng: L.latLng(47.413220, -1.219482)
      });
    }
    ///
    
    Fuseki.getFilms()
      .then((response) => {
        console.log(response);
      })
      .catch(console.log);
  },

  methods: {
    
  }
})
