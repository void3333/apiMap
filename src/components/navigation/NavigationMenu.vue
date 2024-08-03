<template>
  <header>
    <nav>
      <router-link to="/">{Home}</router-link>
      <router-link to="/apiView">{ApiMap}</router-link>
      <router-link to="/about">{Sobre}</router-link>
    </nav>
  </header>
</template>

<script setup>
// hack pra evitar o drag dos itens
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  document.addEventListener('dragstart', handleDragStart)
})

onBeforeUnmount(() => {
  document.removeEventListener('dragstart', handleDragStart)
})

function handleDragStart(event) {
  event.preventDefault()
}
</script>

<style scoped>
header {
  width: 100vw;
  height: 4em;
  border-bottom: 1px solid #00FF00;
  box-shadow: 0 0 30px -10px lime;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.6em;
}

nav a {
  text-decoration: none;
  color: #009f00;
}

nav a:hover {
  text-shadow: 0 0 10px lime;
  color: #30ff30;
}
</style>
