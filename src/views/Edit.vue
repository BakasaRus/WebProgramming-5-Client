<template>
  <section class="section">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column one-half">
          <div class="field">
            <div class="control">
              <textarea class="textarea" id="source" v-model="text"></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-success">Сохранить</button>
            </p>
            <p class="control">
              <button class="button is-danger">Удалить</button>
            </p>
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
    text: '# Hello World!',
  }),

  computed: {
    compiledMarkdown() {
      return marked(this.text, { sanitize: true });
    },
  },
};
</script>

<style scoped>
  .textarea {
    height: 100vh;
  }
</style>
