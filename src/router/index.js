import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Search = () => import('@/views/Search')
const Answer = () => import('@/views/Answer')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const City = () => import('@/views/City')
const Detail = () => import('@/views/detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'search', component: Search, name: '/search' },
      { path: 'answer', component: Answer },
      { path: 'my', component: My, name: 'my' },
      { path: '/city', component: City, name: 'city', props: true }
    ]
  },
  { path: '/login', component: Login, name: 'login' },
  { path: '/detail/:id', component: Detail, name: 'detail', props: true },
  {
    path: '/rent',
    component: () => import('@/views/rent'),
    name: '/rent'
  },
  { path: '/add', component: () => import('@/views/rent/Add/index.vue'), name: '/add' }
]

const router = new VueRouter({
  routes
})

export default router
