<template>
	<div>
		<h1>lista tecnologia</h1>
		<!-- <h3>{{ listaTecnologia }}</h3> -->
		<ul v-for="tarea in porAprender">
			<li> {{ tarea.nombre }}</li>
		</ul>

		<input type="text" placeholder="agregar tecnologia" v-model="tecnologiaNueva" >
		<button @click="agregarTecnologia">agregar</button>

		<!-- Uso de filtros -->
		<h1>Filtros es vuejs</h1>
		<h2>{{ msg | mayusculas | invertir }}</h2>

	</div>
</template>


<script>
	import  {mixin} from '../mixins'
	
	export default {
		created() {
		console.log('Created desde el Componente')
		// this.saludar()
		},
		data(){
			return {
				msg: 'Mensaje para invertir'
			}
		},	
		mixins: [mixin],
		methods: {
			//mixins merge
			saludar(){
				alert('hola desde el component')
			} 
		},
		filters: {
			mayusculas(valor){
				return valor.toUpperCase()
			},
			invertir(valor){
				return valor.split('').reverse().join('')
			}
		}
	}
</script>