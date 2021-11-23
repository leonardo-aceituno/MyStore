<template>
  <div>
    <Toolbar />
    <div class="container">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Toolbar from './components/App/Toolbar.vue'
import Footer from './components/App/Footer.vue'
export default {
  components: { Toolbar, Footer }
}
</script>
