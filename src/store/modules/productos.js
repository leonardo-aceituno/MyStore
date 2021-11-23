export const productosModule = {
  namespaced: true,
  state: {
    todosLosProductos: [{
        nombre: 'Plumón Coral Fleece estampado en modelo y tamaño a elección',
        categoria: 'Hogar',
        empresa: 'Plumones Manolino',
        direccion: '9191 Avenida Vitacura, Chile',
        peso: '1kg',
        oferta: false,
        descuento: 0,
        precio: 6500,
        stock: 10,
        imagen: 'https://github.com/leoaceituno/Cuppon/blob/main/assets/img/cupon-1.jpg?raw=true'
      },
      {
        nombre: 'Entrada para compartir + platos de fondo + postres + bebestibles',
        categoria: 'Comida',
        empresa: 'V for Vegan',
        direccion: '777 Jesse Pinkman, Chile',
        peso: '100gr',
        oferta: true,
        descuento: 10,
        precio: 8000,
        stock: 10,
        imagen: 'https://github.com/leoaceituno/Cuppon/blob/main/assets/img/cupon-2.jpg?raw=true'
      },
      {
        nombre: 'Evaluación integral + blanqueamiento dental led',
        categoria: 'Salud',
        empresa: 'Clínica Dental Quijada',
        direccion: '1342, Blanco Encalada, Chile',
        peso: '50gr',
        oferta: false,
        descuento: 0,
        precio: 10000,
        stock: 10,
        imagen: 'https://github.com/leoaceituno/Cuppon/blob/main/assets/img/cupon-3.jpg?raw=true'
      },
      // {
      //   nombre: 'Pello y bacon',
      //   categoria: 'Salado',
      //   peso: '500gr',
      //   oferta: true,
      //   descuento: 50,
      //   precio: 14000,
      //   stock: 10,
      //   imagen: 'https://i.blogs.es/40c9b7/pizza-casera-champinon/840_560.jpg'
      // }
    ],
    busqueda: ''
  },
  getters: {
    productoDisponiblePorId: (state) => (producto) => {
      return state.todosLosProductos.filter(
        (p) => p.precio == producto || p.nombre.toLowerCase().includes(producto)
      )
    }
  },

  mutations: {
    AGREGAR_PRODUCTO(state, nuevoProducto) {
      state.todosLosProductos.push(nuevoProducto)
    },


  },

  actions: {
    crearProducto(context, producto) {
      context.commit('AGREGAR_PRODUCTO', producto)
    }
  }
}