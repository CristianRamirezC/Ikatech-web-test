<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h5> <span>HUSHPUPPIESCO/CALZADO/</span>{{zapatoMostrar.nombre}}</h5>
                <img :src="zapatoMostrar.foto" class="card-img-top img-fluid" />
            </div>
            <div class="col"> 
                <h2> {{zapatoMostrar.nombre}} </h2>
                <h3> <span>$</span>{{zapatoMostrar.precio}} </h3>
                <h5> <span>Codigo de producto: </span> {{zapatoMostrar.referencia}} </h5>
                <div class="mt-5 text-center">
                    <button class="btn btn-info" @click="aumentarCarrito"> Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>



</template>

<script>

import { computed } from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'MuestraProductoTalla',
    props : ['zapatos'],

    setup(){
        const store = useStore()
        const zapatoMostrar = computed(() => store.getters.getZapatoMostrar)
        const aumentarCarrito = () => {store.commit('aumentarCarrito')}
        return {zapatoMostrar, aumentarCarrito}
        }
}
</script>