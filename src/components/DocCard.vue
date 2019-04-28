<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ doc.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        {{ doc.body }}
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="'/edit/' + this.doc._id" class="card-footer-item">Открыть</router-link>
      <a href="#" class="card-footer-item">Удалить</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DocCard',
  props: {
    doc: Object,
  },
};
</script>
