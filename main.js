const { LMap, LTileLayer, LMarker } = Vue2Leaflet;

Vue.component('vueSlider', window['vue-slider-component'], );

new Vue({
  el: '#app',
  components: { LMap, LTileLayer, LMarker },

  data: {
    map: {
      zoom: 13,
      center: L.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    },
    markers: [],
    frieze: {
      value: 2000,
      // width: 280,
      //height: 8,
      dotSize: 20,
      min: 1980,
      max: 2020,
      interval: 1,
      disabled: false,
      show: true,
      speed: 0.3,
      reverse: false,
      lazy: true,
      tooltip: 'always',
      piecewise: true
    },
    actors: [],
    films: [],
    groupedFilm: [],
    currentYear: ""
  },

  created() {

    var getActors = () => {
      Fuseki.getActors().then(response => response.json())
        .then(response => {
          return response;
        })
        .then(jsonResponse => jsonResponse.results.bindings)
        .then(actors => this.actors = actors);
    }

    Fuseki.getFilms().then(response => response.json())
      .then(response => {
        return response;
      })
      .then(jsonResponse => jsonResponse.results.bindings)
      .then(films => this.films = films)
      .then(films => { this.groupedFilm = chunkArray(films, 3); getActors() });

  },

  methods: {
    updateYear(event) {
      this.currentYear = event.getValue().toString();
    }
  },

  computed: {
    filmsByYears() {
      const films = chunkArray(this.films.filter(film => film.annee.value == this.currentYear), 3);
      return films;
    }
  }
})

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}