import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'

Vue.component('app-home', Home);
Vue.component('app-contact', Contact);
Vue.component('app-about', About);

new Vue({
  el: '#app',
  render: h => h(App)
})
