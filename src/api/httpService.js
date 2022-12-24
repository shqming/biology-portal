import axios from 'axios';
import { Notification, MessageBox, Message } from 'element-ui';
import { BASE_URL } from '@/constant/index';

const httpService = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// request拦截器
httpService.interceptors.request.use();

// 响应拦截器
httpService.interceptors.response.use((res) => res,
  (error) => {
    console.log(`err${error}`);
    let { message } = error;
    if (message === 'Network Error') {
      message = '后端接口连接异常';
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时';
    } else if (message.includes('Request failed with status code')) {
      message = `系统接口${message.substr(message.length - 3)}异常`;
    }
    Message({
      message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  });

export default httpService;
export * from 'axios';
