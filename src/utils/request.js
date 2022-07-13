import axios from 'axios'
import store from '@/store'

const instance = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 50000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (store.state.token) {
    config.headers = {
      authorization: store.state.token
    }
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default instance
