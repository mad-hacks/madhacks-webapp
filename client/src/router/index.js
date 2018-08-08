import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/pageComponents/Welcome'
import Event from '@/components/pageComponents/Event'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    }
  ]
})
