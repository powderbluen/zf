import request from '@/utils/request'

// 轮播图
export const paraMenters = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}

// 租房小组
export const myGroups = (id) => {
  return request({
    method: 'GET',
    url: '/home/groups',
    params: {
      id
    }
  })
}
