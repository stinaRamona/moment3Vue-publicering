<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header, 
    RouterView, 
    Footer
  }
}

</script>

<style scoped>
main {
  max-width: 950px;
  width:100%; 
  margin: 0 auto; 
}
</style>
