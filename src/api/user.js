import request from '@/utils/request'
// import store from '@/store'

// 登录请求
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

// 用户信息资料
export const userInfo = () => {
  return request({
    method: 'GET',
    url: '/user'
    // headers: {
    //   authorization: store.state.token
    // }
  })
}
