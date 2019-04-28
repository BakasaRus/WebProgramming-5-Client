<template>
  <section class="section">
    <div class="container">
      <div v-if="docs.length > 0" class="columns is-multiline">
        <div v-for="doc in docs" :key="doc.id" class="column is-one-quarter">
          <DocCard :doc="doc" @removed="load"></DocCard>
        </div>
      </div>
      <div v-else class="columns">
        <div class="column is-half-desktop is-offset-one-quarter-desktop">
          <div class="notification is-warning">
            <strong>Ой, а документов и нет (｡•́︿•̀｡)</strong>
            <br>
            Попробуйте создать новый документ, это просто!
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import DocCard from '@/components/DocCard.vue';

export default {
  name: 'home',
  components: {
    DocCard,
  },

  data: () => ({
    docs: [],
  }),

  created() {
    this.load();
  },

  methods: {
    load() {
      this.axios.get('/docs')
        .then((result) => { this.docs = result.data.docs; })
        .catch((error) => { console.log(error); });
    },
  },
};
</script>
