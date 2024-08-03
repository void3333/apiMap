<template>
  <div class="container">
    <router-link
      v-for="button in buttons"
      :key="button.id"
      :to="button.link"
      class="button"
    >
      {{ button.name }}
    </router-link>
  </div>
</template>

<script setup>
const buttons = [
  { id: 1, name: 'Home', link: '/page1' },
];
</script>

<style scoped>
.container {
  margin-top: 12em;
  display: flex;
  gap: 10px;
  height: 100vh;
  color: lime;
  font-family: 'Courier New', Courier, monospace;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lime;
  color: lime;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.4em;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  height: 3em;
}

.button:hover {
  background-color: #152113;
  transition: ease .2s;
}
</style>
