import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

// import JQuery from 'jquery';
// import 'popper.js';
// import 'bootstrap';
// import 'bootstrap-sass';

Vue.config.productionTip = false

Vue.component('app-home', Home);
Vue.component('app-contact', Contact);
Vue.component('app-about', About);

new Vue({
  render: h => h(App),
}).$mount('#app')
