import Vue from 'vue'
import App from './App.vue'

import "./css/default.css"
import "./css/layout.css"
import "./css/media-queries.css"
import "./css/magnific-popup.css"

//import "./js/modernizr.js"
//import "./js/jquery-1.10.2.min.js"


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
