<template>
  <div>
		<h1>Counter {{ counter }}</h1>
		<button @click="decrement">-</button>
		<button @click="increment">+</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'Counter',
	// Vuex trabalha com computed ao invés de data
	computed: {
		...mapGetters([
			'counter'
		])
	},
	methods: {
		...mapActions([
			'decrement',
			'increment'
		])
	}
}
</script>
