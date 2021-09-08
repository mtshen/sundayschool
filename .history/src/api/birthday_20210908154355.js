import apiConf, { axios } from "./index";

export function addBirthdayManage(data) {
  return axios.post(`${apiConf.serverIp}/addBirthdayManage`, data);
}
export function queryBirthdayManage(data) {
  return axios.post(`${apiConf.serverIp}/queryBirthdayManage`, data);
}
export function removeBirthdayManage(data) {
  return axios.post(`${apiConf.serverIp}/removeBirthdayManage`, data);
}
export function updateBirthdayManage(data) {
  return axios.post(`${apiConf.serverIp}/updateBirthdayManage`, data);
}
