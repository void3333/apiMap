<script setup>

</script>

<template>
  <div class="greetings">
    <h1 class="title">conformityApiMap()</h1>
    <h3 class="description">
      Projeto desenvolvido em <br>
      <a href="#" target="_blank" rel="noopener" class="link">Nginx | PHP | MySQL</a> +
      <a href="#" target="_blank" rel="noopener" class="link">Vue 3 | SCSS</a>
    </h3>
  </div>
</template>

<style scoped>
.greetings {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
  color: #00FF00;
  background: #1E1E1E;
  border: 1px solid #00FF00;
  border-radius: 8px;
}

.title {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
  color: #00FF00;
  text-shadow: 0 0 10px #00FF00;
  margin-top: -10px;
}

.description {
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.6;
  color: #B0B0B0;
}

.link {
  color: #00FF00;
  text-decoration: none;
  pointer-events: none;
}

.link:hover {
  //text-decoration: underline;
  cursor: default;
}

@media (min-width: 1024px) {
  .title,
  .description {
    text-align: left;
  }
}
</style>
