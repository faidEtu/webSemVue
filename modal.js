Vue.component('modal', {

  props: ['film', 'actors'],

  data() {
    return {
      filmDetail: {},
      filmActors: this.actors.filter((actor) => actor.film.value == this.film.film.value )
    };
  },

  created() {
    
  },

  methods: {
    closeModal() {
      this.$emit('close');
    }
  },

  template: `<div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                        <h2>
                            {{ film.label.value }}
                        </h2>
                        <p>
                            Réalisé par
                            <br>
                            {{ film.realisateur.value }}
                        </p>
                        <p>
                            Tourné en 
                            <br>
                            {{ film.annee.value }}
                        </p>
                        <p>Principaux acteurs : </p>
                        <ul>
                            <li v-for="a in filmActors" :key="a.personne.value">
                                {{ a.personneName.value }} 
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="media-right">
                        <button class="delete" @click="closeModal"></button>
                    </div>
                    </article>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
                </div>`
})

