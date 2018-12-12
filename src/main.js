import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueTouch from '../node_modules/vue-touch'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView);
<<<<<<< Updated upstream
=======
Vue.use(VueTouch, {name: "v-touch"});
>>>>>>> Stashed changes

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
