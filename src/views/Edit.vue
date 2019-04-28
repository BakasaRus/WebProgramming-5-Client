<template>
  <section class="section">
    <div class="container">
      <div class="is-flex control-panel">
        <h2 class="title is-2">{{ title }}</h2>
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-success">Сохранить</button>
          </p>
          <p class="control">
            <button class="button is-danger">Удалить</button>
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
    id: '',
    title: 'New Markdown document',
    body: '# Hello World!',
  }),

  methods: {
    save() {
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
    height: 100vh;
  }

  .control-panel {
    justify-content: space-between;
    align-content: center;
  }
</style>
