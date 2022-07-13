import request from '@/utils/request'

// 查询房源数据
export const houseCondition = (id) => {
  return request({
    method: 'GET',
    url: '/houses/condition?id=AREA%7C88cff55c-aaa4-e2e0'
    // url: `/houses/condition?id${id}`
  })
}

export const house = ({ cityId }) => {
  return request({
    method: 'GET',
    // url: '/houses',
    url: `/houses?cityId=${cityId}`
  })
}

// 查询房屋具体信息
export const houseDetail = (id) => {
  return request({
    method: 'GET',
    url: `/houses/${id}`
  })
}

// 收藏房屋
export const favorites = (id) => {
  return request({
    method: 'POST',
    url: `/user/favorites/${id}`
  })
}

// 删除收藏
export const deleteFavorites = (id) => {
  return request({
    method: 'DELETE',
    url: `/user/favorites/${id}`
  })
}

// 查看已发布房源列表
export const release = () => {
  return request({
    method: 'GET',
    url: '/user/houses'
  })
}
