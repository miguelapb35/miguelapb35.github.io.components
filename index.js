/*  Components Basics
Here's an example of a Vue component:
*/

// Define a new component called button-counter
Vue.component('button-counter',{
	data: function(){
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++" class="button is-info is-large" >You clicked me  {{ count }} times. </button>'
})

/*
Components are reusable Vue instances with a name:
in this case, <button-counter>. We can use this
component as a custom element inside a root Vue 
instance created with new Vue

*/

new Vue({
	el:'#components-demo'
})