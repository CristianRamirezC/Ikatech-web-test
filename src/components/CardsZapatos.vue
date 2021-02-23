<template>
  <div
    class="col-12 col-sm-4 col-md-3 col-lg-2 bn-3 mb-3"
    v-for="zapato of zapatos"
    :key="zapato.id">
    <div class="card hover-overlay" @click="mostrar(zapato)">
      <img src="@/assets/1.jpg" class="card-img-top img-fluid" />
      <div class="card-body">
        <h5 class="card-title">{{ zapato.nombre }}</h5>
        <p class="card-text">
          $ <span>{{ zapato.precio }}</span>
          <button class="btn btn-success">Agregar al carrito</button>
        </p>
      </div>
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
      store.dispatch("mostrarZapato", zapato);
    };
    return { mostrar };
  },
};
</script>