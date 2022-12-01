import axios from 'axios';
import createIcodeAndcodetype from './createIcodeAndcodetype';
// import store from '@/store'
// import { message as $message } from '@/libs';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const { icode, codetype } = createIcodeAndcodetype();
    config.headers.icode = icode;
    config.headers.codetype = codetype;
    // if (store.getters.token) {
    //   // 如果token存在 注入token
    //   config.headers.Authorization = `Bearer ${store.getters.token}`
    // }
    return config; // 必须返回配置
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data;
  //   要根据success的成功与否决定下面的操作
  if (success) {
    return data;
  } else {
    // $message('warn', message);
    // TODO：业务错误
    return Promise.reject(new Error(message));
  }
});

export default service;
