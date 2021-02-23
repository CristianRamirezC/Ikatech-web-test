<template>
    <div class="container">
        <div>
            <h2>COMPLETA TU LOOK</h2>
        </div>
        <div class="row">
            <CardsZapatos :zapatos="zapatos"/>
        </div>
    </div>
</template>

<script>


import CardsZapatos from './CardsZapatos.vue'

export default {
    name: 'CompletaLook',
    props : ['zapatos'],
    components: {
        CardsZapatos
    }
}
</script>