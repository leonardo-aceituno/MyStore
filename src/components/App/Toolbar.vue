<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top color-fondo">
    <a class="navbar-brand" href="/">
      <img src="@/assets/img/logo-white.png" width="100" height="30" alt="" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="(item, $index) in items" :key="$index">
          <router-link :to="item.to" class="nav-link">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: 'Inicio', to: '/' },
      { text: 'Nuevo producto', to: '/nuevo-producto' },
      { text: 'Carrito de Compras', to: '/carrito' }
      // { text: 'Buscar', to: '/buscar' }
    ]
  })
}
</script>

<style>
.color-fondo {
  background-color: #28a745;
}
</style>
