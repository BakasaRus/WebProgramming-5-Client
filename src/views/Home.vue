<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div v-for="doc in docs" :key="doc.title" class="column is-one-quarter">
          <DocCard :title="doc.title" :body="doc.body"></DocCard>
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
    this.axios.get('/docs')
      .then((result) => { this.docs = result.data.docs; })
      .catch((error) => { console.log(error); });
  },
};
</script>
