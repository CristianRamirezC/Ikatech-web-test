<template>
  <div>
    <Header/>
    <MuestraProductoTalla :zapatos="zapatos"></MuestraProductoTalla>
    <DetallesProducto :zapatos="zapatos"></DetallesProducto>
    <CompletaLook
    :zapatos="zapatos"
    />
    <ProductosRecomendados :zapatos="zapatos"></ProductosRecomendados>
  </div>
</template>

<script>

import {useStore} from 'vuex'
import { computed, onMounted } from 'vue'
import Header from './components/Header'
import MuestraProductoTalla from './components/MuestraProductoTalla.vue'
import DetallesProducto from './components/DetallesProducto.vue'
import CompletaLook from './components/CompletaLook'
import ProductosRecomendados from './components/ProductosRecomendados'

export default {
  name: 'App',
  components: {
    MuestraProductoTalla, DetallesProducto, CompletaLook, ProductosRecomendados, Header
  },
  setup(){
    const store = useStore()
    onMounted(async() => {
      store.dispatch('fetchData')
    })

    const zapatos = computed(() => store.state.zapatos)

    return {zapatos}
  }

}
</script>

