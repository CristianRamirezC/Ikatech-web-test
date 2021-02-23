<template>
  <div>
    <div>
      <h3 class="text-center bg-primary">HOT SALE -30% EN SANDALIAS</h3>
    </div>

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link ms-4" href="#">DIRECTORIO DE TIENDAS</a>
              <a class="nav-link" href="#">SERVICIO AL CLIENTE</a>
              <a class="nav-link" href="#">MI CUENTA</a>
              <a class="nav-link" href="#">Carrito: {{carrito}} </a>
            </div>
          </div>
        </div>
      </nav>
    </div>


  </div>
</template>


<script>

import { computed } from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'Header',
        setup(){
        const store = useStore()
        const carrito = computed(() => store.state.carrito)
        return {carrito}
        }
    
};
</script>