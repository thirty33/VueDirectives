// global mixins

import Vue from 'vue'

// Afecta a cada instancia de Vue indistintamente, usar con cuidado
Vue.mixin({
	created(){
		// console.info('hola desde mixin global')
		// alert('hola desde mixin global')
		// this.saludar(this.$options.nombre)
	},
	methods: {
		// saludar(nombre) {
		// 	alert(`hola desde ${nombre}`)
		// }
	}
})



// local mixin
export const mixin = {
	created() {
		console.log('Created desde el mixin')
		// this.saludar()
	},
	data() {
			return {
				porAprender: [
					{nombre: 'angular 5'},
					{nombre: 'angular'},
					{nombre: 'angular'},
					{nombre: 'angular'},
					{nombre: 'angular'},
				],
				tecnologiaNueva: null,
			}
		},
		methods: {
			agregarTecnologia() {
				this.porAprender.unshift({
					nombre: this.tecnologiaNueva
				})
				this.tecnologiaNueva = null
			},
			//mixins merge
			saludar(){
				alert('hola desde el mixin')
			} 
		},
		computed: {
			listaTecnologia(){
				return this.porAprender
			}
		}
}