export const mixin = {
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
			}
		},
		computed: {
			listaTecnologia(){
				return this.porAprender
			}
		}
}