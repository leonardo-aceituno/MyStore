<template>
  <div>
    <!-- <h4>Carrito de compras</h4> -->
    <div class="pt-5 my-5">
      <h1 class="text-secondary text-center text-uppercase d-none d-md-block fw-bold">
        Carrito de compras
      </h1>
    </div>
    <div class="d-flex justify-content-end align-items-center my-3">
      <div>Total a Pagar: ${{ $store.getters['carrito/totalTotal'].toLocaleString('de-DE') }}</div>
      <button class="btn btn-info ml-3" @click="clickPagar">Comprar</button>
    </div>

    <Producto
      v-for="(producto, $index) in $store.state.carrito.todosLosProductos"
      :key="$index"
      :producto="producto"
    />
  </div>
</template>

<script>
import Producto from '../components/Carrito/Producto.vue'

export default {
  components: {
    Producto
  },
  methods: {
    async clickPagar() {
      await this.$store.dispatch('carrito/comprar')
      alert('Compra procesada, muchas gracias por su preferencia!')
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
