<template>
	<div>
		<h1>lista tecnologia</h1>
		<!-- <h3>{{ listaTecnologia }}</h3> -->
		<ul v-for="tarea in porAprender">
			<li> {{ tarea.nombre }}</li>
		</ul>

		<input type="text" placeholder="agregar tecnologia" v-model="tecnologiaNueva" >
		<button @click="agregarTecnologia">agregar</button>
	</div>
</template>


<script>
	import  {mixin} from '../mixins'
	
	export default {
		created() {
		console.log('Created desde el Componente')
		// this.saludar()
		},	
		mixins: [mixin],
		methods: {
			//mixins merge
			saludar(){
				alert('hola desde el component')
			} 
		}
	}
</script>