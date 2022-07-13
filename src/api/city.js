import request from '@/utils/request'

// 所有城市列表
export const ararCiry = () => {
  return request({
    method: 'GET',
    url: '/area/city?level=1'
  })
}

// 热门城市列表
/// area/hot
export const hotCiry = () => {
  return request({
    method: 'GET',
    url: '/area/hot'
  })
}
