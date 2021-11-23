<template>
  <div >
    <div class="pt-3 my-5">
      <h1 class="text-secondary text-center text-uppercase d-none d-md-block fw-bold">cupones</h1>
    </div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="producto"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        placeholder="Buscar producto..."
      />
    </div>

    <!-- INPUT  -->
    <!-- <input class="inputBusqueda" type="text" v-model="producto" /> -->

    <!-- TARJETAS 01 -->
    <!-- <div class="row">
      <div
        class="col-sm mb-4 mb-md-0"
        v-for="(producto, index) in productoDisponiblePorId(producto.toLowerCase())"
        :key="index"
      >
        <TarjetaProducto :producto="producto" class="mx-auto" />
      </div>
    </div> -->
    <!-- END TARJETAS 01 -->

    <!-- TARJETA 02 -->
    <div class="card-columns h-100">
      <div
        class="card h-100"
        v-for="(item, $index) in productoDisponiblePorId(producto.toLowerCase())"
        :key="$index"
      >
        <TarjetaProducto :producto="item" class="mx-auto" />
      </div>
    </div>
    <!-- TARJETA 02 -->
  </div>
</template>

<script>
import TarjetaProducto from './TarjetaProducto.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'buscar',
  components: { TarjetaProducto },
  data: () => ({
    producto: ''
  }),

  computed: {
    ...mapGetters('productos', ['productoDisponiblePorId'])
  }
}
</script>

<style></style>
