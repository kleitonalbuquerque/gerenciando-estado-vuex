import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
		counter: 0
	},
	mutations: { // mutations são responsáveis por mudar o valor da state(estado)
		decrement: state => state.counter--,
		increment: (state) => state.counter++
		// increment: (state, num) => state.counter =  num * 2
		// increment: state => state.counter = state.counter + 10
	},
	getters: {
		// counter: state => state.counter * 3
		counter: state => state.counter
	},
	actions: { // Pega os resultados da mutations
		decrement: ({ commit }) => commit('decrement'), // descontrução
		increment: ({ commit }) => commit('increment')
		// increment: ({ commit }) => { // simulando uma chamada em API
		// 	setTimeout(() => {
		// 		commit('increment', 3) // isso será: 9 * 2 = 18
		// 	}, 2000)
		// }
	}
})

export { store }