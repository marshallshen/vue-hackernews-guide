import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.start(App, '#app')