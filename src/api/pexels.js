import request from '@/utils/request';

export const getPexelsList = (data) => {
  return request({
    url: '/pexels/list',
    params: data
  });
};
