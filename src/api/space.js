import request from '@/utils/space-request'




export function getSpaceList(data) {
  return request({
    url: '/user/getSpaces',
    method: 'post',
    data
  })
}

