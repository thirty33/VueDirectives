// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// directivas propias
// Vue.directive('fijar', {
// 	bind(el, binding) {
// 		console.log(el,binding)
// 		el.style.position = 'fixed'
// 		// expresiones
// 		if(binding.expression) {
// 			el.style.top = binding.expression + 'px'
// 		}
// 		// argumentos
// 		if(binding.arg) {
// 			let color = 'peru'
// 			let modificadores = Object.keys(binding.modifiers)
// 			// modificadores
// 			if(modificadores.length > 0) {
// 				color = modificadores[0]
// 			}
// 			el.style.backgroundColor = color
// 		}

// 		// modificadores

// 	}
// })

// Custom directives object literals
Vue.directive('fijar', function (el, binding){
	el.style.position = 'fixed'
	el.style.top = binding.value.top
	el.style.backgroundColor = binding.value.background 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  nombre: 'instancia principal'
})
