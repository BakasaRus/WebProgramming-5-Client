<template>
  <section class="section">
    <div class="container">
      <div class="is-flex control-panel">
        <h2 class="title is-2">{{ title }}</h2>
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-success" @click="save">Сохранить</button>
          </p>
          <p class="control">
            <button class="button is-danger" @click="remove">Удалить</button>
          </p>
        </div>
      </div>
      <div class="columns is-desktop">
        <div class="column one-half">
          <div class="field">
            <div class="control">
              <textarea class="textarea" id="source" v-model="body"></textarea>
            </div>
          </div>
        </div>
        <div class="column one-half">
          <div class="box">
            <div class="content" v-html="compiledMarkdown"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked';

export default {
  name: 'Editor',
  data: () => ({
    title: 'New Markdown document',
    body: '# Hello World!',
  }),

  created() {
    if (this.$route.params.id !== undefined) {
      this.axios.get(`/docs/${this.$route.params.id}`)
        .then((response) => {
          this.title = response.data.doc.title;
          this.body = response.data.doc.body;
        })
        .catch((error) => { console.log(error); });
    }
  },

  methods: {
    save() {
      this.axios.post('/docs', {
        title: this.title,
        body: this.body,
      })
        .then(() => { this.$router.push('/'); })
        .catch((error) => { console.log(error); });
    },

    remove() {
      if (this.$route.params.id !== undefined) {
        this.axios.delete(`/docs/${this.$route.params.id}`)
          .then(() => { this.$router.push('/'); })
          .catch((error) => { console.log(error); });
      }
    },
  },

  computed: {
    compiledMarkdown() {
      return marked(this.body, { sanitize: true });
    },
  },
};
</script>

<style scoped>
  .textarea {
    height: 50vh;
  }

  .control-panel {
    justify-content: space-between;
    align-content: center;
  }
</style>
