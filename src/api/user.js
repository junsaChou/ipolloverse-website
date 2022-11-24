import request from '@/utils/request'



export function updaterAddrss(data) {
  return request({
    url: '/users/updateAddress',
    method: 'post',
    data,
  })
}
export function getTableData(token) {
  return request({
    url: '/nanotool/getData',
    method: 'get',
    // params: { token }
  })
}

export function getSpaceList(data) {
  return request({
    url: '/ipolloverse/admin/spaceList02',
    method: 'post',
    data
  })
}

