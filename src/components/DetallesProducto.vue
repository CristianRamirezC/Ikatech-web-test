<template>
    <div class="container">
        <div>
            <h1>Detalles de producto</h1>
            <hr>
            <p class="fs-3"> {{zapatoMostrar.detalles}} </p>
            <h1>Tecnologia</h1>
            <hr>
            <p class="fs-3"> {{zapatoMostrar.tecnologia}} </p>
        </div>
    </div>
</template>


<script>

import { computed } from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'DetallesProducto',
    props : ['zapatos'],
        setup(){
        const store = useStore()
        const zapatoMostrar = computed(() => store.getters.getZapatoMostrar)
        return {zapatoMostrar}
        }

}
</script>