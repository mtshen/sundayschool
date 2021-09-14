import axios from "axios";
import { Message } from 'element-ui';

axios.defaults.timeout = 60000;

/**
 * 对于请求报错的统一处理
 * @param {*} error
 */
function tryError(error) {
  Message({
    message: error.message,
    duration: 2000,
    type: 'error',
  });

  Promise.reject(error);
}

/****** request拦截器==>对请求参数做处理 ******/
axios.interceptors.request.use(config => {
  return config;
}, tryError);

/****** request拦截器==>对接收数据做处理 ******/
axios.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0) {
      Message({
        message: response.data.msg,
        duration: 2000,
        type: 'error',
      });
    }

    return response.data;
  }, tryError);

const curHost = "47.92.226.156:5200";

export default {
  serverIp: curHost,
  axios,
};
