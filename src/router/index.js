import Vue from 'vue'
import Router from 'vue-router'
import CarSelection from '@/components/CarSelection'
import CarDimension from '@/components/CarDimension'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CarSelection',
      component: CarSelection
    },
    {
      path: '/CarDimension/:makeName/:modelName/:year',
      name: 'CarDimension',
      component: CarDimension
    }
  ]
})
