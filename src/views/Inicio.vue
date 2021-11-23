<template>
  <div>
    <!-- TARJETAS 01 -->
    <!-- <div class="row">
      <div
        class="col-sm mb-4 mb-md-0"
        v-for="(producto, $index) in $store.state.productos.todosLosProductos"
        :key="$index"
      >
        <TarjetaProducto :producto="producto" class="mx-auto" />
      </div>
    </div> -->
    <!-- END TARJETAS 01 -->

    <!-- TARJETAS 01 -->
    <div class="card-columns">
      <div
        class="card h-100"
        v-for="(item, $index) in $store.state.productos.todosLosProductos"
        :key="$index"
      >
        <TarjetaProducto :producto="item" class="mx-auto" />
      </div>
    </div>
    <!-- END TARJETAS 02 -->

    <BuscarProductos></BuscarProductos>
  </div>
</template>

<script>
// import TarjetaProducto from '../components/Productos/TarjetaProducto.vue'
import BuscarProductos from '../components/Productos/BuscarProductos.vue'

export default {
  components: {
    // TarjetaProducto,
    BuscarProductos
  }
}
</script>

<style></style>
