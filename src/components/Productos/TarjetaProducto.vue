<template>
  <!-- TARJETAS 01-->
  <!-- <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="producto.imagen" alt="Card image cap" />
    <div class="card-body">
      <h6>{{ producto.nombre }}</h6>
    </div>
    <ul class="list-group">
      <li class="list-group-item">Categoria: {{ producto.categoria }}</li>
      <li class="list-group-item">Peso: {{ producto.peso }}</li>
      <li class="list-group-item">Precio: ${{ producto.precio }}</li>
      <li class="list-group-item">
        Descuento:
        {{ producto.oferta ? `${producto.descuento}% off` : 'Sin descuento asociado' }}
      </li>
    </ul>
    <div class="card-actions" v-if="mostrarBtn">
      <button class="btn btn-info" @click="agregarProductoAlCarrito">Agregar al carrito</button>
    </div>
  </div> -->
  <!-- END TARJETAS 01 -->

  <!-- TARJETAS 02-->

  <div>
    <img :src="producto.imagen" class="card-img-top" alt="imagen" />
    <div class="card-body h-100">
      <h5 class="card-title">{{ producto.nombre }}</h5>

      <p class="card-text">
        <span>{{ producto.empresa }}</span
        ><br />
        <i class="fas fa-map-marker-alt"></i>
        <span class="direccion ml-1">{{ producto.direccion }}</span>
      </p>
      <hr />

      <p class="card-text text-right">
        <span v-if="producto.oferta">
          <span class="precio">${{ producto.precio.toLocaleString('de-DE') }}</span>
          <span class="oferta ml-2">${{ descuento(producto).toLocaleString('de-DE') }}</span>
        </span>
        <span v-else>
          <span class="normal ml-2">${{ producto.precio.toLocaleString('de-DE') }}</span>
        </span>

        <button class="btn btn-warning ml-2" @click="agregarProductoAlCarrito">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </p>
    </div>
    <!-- <div class="card-actions" v-if="mostrarBtn">
      <button class="btn btn-info" @click="agregarProductoAlCarrito">Agregar al carrito</button>
    </div> -->
  </div>
  <!-- END TARJETAS 02 -->
</template>

<script>
export default {
  name: 'TarjetaProducto',
  props: {
    producto: { type: Object, required: true },
    mostrarBtn: { type: Boolean, default: true }
  },
  methods: {
    agregarProductoAlCarrito() {
      this.$store.dispatch('carrito/agregarProducto', this.producto)
    },
    descuento(producto) {
      return producto.precio - (producto.precio * producto.descuento) / 100
    }
  }
}
</script>

<style>
h5 {
  font-weight: 300;
  font-size: 1.25;
  color: #212529;
}

.direccion {
  font-weight: 300;
  font-size: 0.813rem;
  color: #707070;
}

.precio {
  font-weight: 300;
  color: #707070;
  font-size: 1rem;
  text-decoration: line-through;
}

.oferta {
  font-weight: 500;
  color: #28a745;
  font-size: 1.25rem;
}

.normal {
  font-weight: 500;
  color: #707070;
  font-size: 1.25rem;
}
</style>
