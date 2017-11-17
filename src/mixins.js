export const mixin = {
	created() {
		console.log('Created desde el mixin')
		this.saludar()
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