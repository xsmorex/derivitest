import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/style.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App),
}).$mount('#app')
