import Vue from 'vue'
import App from './App.vue'
import ListEtudiant from './components/ListEtudiant.vue'
import create from './components/AjouterEtudiant.vue'
import Edit from './components/EditEtudiant.vue'
import VueRouter from 'vue-router'

vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {
    name:'Create',
    path:'/create',
    component: create
  },
  {
    name:'Edit',
    path:'/Edit/:id',
    component: Edit
  },
  {
    name:'ListEtudiant',
    path:'/',
    component: ListEtudiant
  }
];

const router = new VueRouter({mode:'history',routes:routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
