import { createStore } from 'vuex'

export default createStore({
  state: {
    zapatos: [],
    zapatoMostrar: {},
    carrito: 0
  },
  mutations: {
    setZapatos(state, listaZapatos) {
      state.zapatos = listaZapatos
      console.log(state.zapatos)
    },
    setZapatoMostrar(state, zapato){
      state.zapatoMostrar = zapato
    },
    setCarrito(state, carrito){
      state.carrito = carrito
    },
    aumentarCarrito(state){
      state.carrito ++
    }
  },
  actions: {
    async fetchData({commit}) {
      try {
        const res = await fetch('zapatos.json')
        const zapatos = await res.json()
        commit('setZapatos', zapatos)
      } catch (error) {
        console.log(error)
      }
  },
  mostrarZapato({ commit, state }, zapato){
    commit('setZapatoMostrar', zapato) 
  }
},
getters: {
  getZapatoMostrar(state){
    return state.zapatoMostrar
  }
}
})