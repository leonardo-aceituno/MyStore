<template>
  <!-- TARJETA 01 -->
  <!-- <div class="card">
    <div class="row">
      <div class="col-md-4">
        <img :src="producto.imagen" class="w-100" />
      </div>
      <div class="col-md-8 px-3">
        <div class="card-block px-3">
          <h4 class="card-title">{{ producto.nombre }}</h4>
          <p class="card-text">Precio: ${{ producto.precio }}</p>
          <div class="row align-items-center">
            <p class="card-text mb-0 mr-4">Cantidad: {{ producto.cantidad }}</p>
            <div class="btn-group-vertical">
              <button
                class="btn btn-info"
                @click="$store.dispatch('carrito/agregarProducto', producto)"
              >
                +
              </button>
              <button
                class="btn btn-info"
                @click="$store.dispatch('carrito/quitarProducto', producto)"
              >
                -
              </button>
            </div>
          </div>

          <p class="card-text">
            Subtotal: ${{ (producto.cantidad * producto.precio).toLocaleString('de-DE') }}
          </p>
          <p class="card-text">
            Total: ${{
              parseInt(
                producto.precio * (1 - producto.descuento / 100) * producto.cantidad
              ).toLocaleString('de-DE')
            }}
          </p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  </div> -->

  <!-- TARJETA 02 -->
  <div class="card mb-3" style="max-width: 100%">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="producto.imagen" alt="imagen" class="w-100" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ producto.nombre }}</h5>
          <div>
            <p class="card-text">Precio: ${{ producto.precio.toLocaleString('de-DE') }}</p>
          </div>
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group btn-group-sm mr-2" role="group" aria-label="First group">
              <p class="card-text mb-0 mr-4">Cantidad: {{ producto.cantidad }}</p>

              <button
                type="button"
                class="btn btn-info hola"
                @click="$store.dispatch('carrito/quitarProducto', producto)"
              >
                <i class="fas fa-minus"></i>
              </button>
              <button
                type="button"
                class="btn btn-info"
                @click="$store.dispatch('carrito/agregarProducto', producto)"
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <!-- <div class="btn-group-vertical">
              <button class="btn btn-info" @click="$store.dispatch('carrito/agregarProducto', producto)"> + </button>
              <button class="btn btn-info" @click="$store.dispatch('carrito/quitarProducto', producto)" > - </button>
            </div> -->
          <!-- </div> -->
          <div class="pt-5">
            <p class="card-text">
              Subtotal: ${{ (producto.cantidad * producto.precio).toLocaleString('de-DE') }}
            </p>
            <p class="card-text">
              Total: ${{
                parseInt(
                  producto.precio * (1 - producto.descuento / 100) * producto.cantidad
                ).toLocaleString('de-DE')
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: { type: Object, required: true }
  }
}
</script>

<style>
.hola {
  border-start-start-radius: 3.3px !important;
  border-end-start-radius: 3.3px !important;
}
</style>
