<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 bn-3 mb-3" v-for="zapato of zapatos" :key="zapato.id">
    <div class="card" @click="mostrar(zapato)">
        <div>
            <img :src="zapato.foto" class="card-img-top img-fluid rounded zoom" />   
        </div>
      <div class="card-body">
        <h5 class="card-title">{{ zapato.nombre }}</h5>
        <p class="card-text">
          $ <span>{{ zapato.precio }}</span>
        </p>
      </div>
    </div>
    <div class="text-center">
        <button class="btn btn-info zoom" @click="aumentarCarrito">Agregar al carrito</button>
    </div>
    
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "CardsZapatos",
  props: ["zapatos"],
  components: {},
  setup() {
    const store = useStore();
    const mostrar = (zapato) => {
      store.dispatch("mostrarZapato", zapato)}
    const aumentarCarrito = () => {store.commit('aumentarCarrito')}
    return { mostrar,aumentarCarrito };
  },
};
</script>

<style>
.zoom {
  padding: 0px;
  transition: transform .2s; /* Animation */
  width: auto;
  height: auto;
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>

