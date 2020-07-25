import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersProfile from '@/components/usersProfile/usersProfile.vue'
import Profile from '@/components/usersProfile/views/profile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/usersProfile',
    name: 'UsersProfile',
    component: UsersProfile,
    children: [
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'appointments',
        component: () => import('../components/usersProfile/views/appointments.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
