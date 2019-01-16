import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueLodash from 'vue-lodash'
import devtools from '@vue/devtools';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/style.css'
import App from './App.vue'
import store from "./store";

Vue.config.productionTip = false
Vue.config.silent = true
Vue.use(BootstrapVue);
Vue.use(VueLodash) // options is optional
if (process.env.NODE_ENV === 'development') {
  devtools.connect(/* host, port */)
}
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
