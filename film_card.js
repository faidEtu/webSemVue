Vue.component("film-card", {

  props: ['film', 'actors'],

  data() {
    return {
      activeModal: false
    }
  },

  methods: {
    activateModal: function (e) {
      this.activeModal = true;
    },

    closeModal: function (e) {
      this.activeModal = false;
    }
  },

  template: `<div class="column is-one-third">
                <div class="card " @click="activateModal">
                        <div class="card-image">
                        </div>
                        <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                            <p class="title is-4">{{ film.label.value }}</p>
                            <p class="subtitle is-6">{{ film.realisateur.value }}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <modal v-if="activeModal" @close="closeModal" :film="film" :actors="actors"></modal>
                </div>
                `
});
