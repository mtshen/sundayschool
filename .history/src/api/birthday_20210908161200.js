import apiConf from "./index";

export function addBirthdayManage(data) {
  return apiConf.axios.post(`${apiConf.serverIp}/addBirthdayManage`, data);
}
export function queryBirthdayManage(data) {
  return apiConf.axios.post(`http://${apiConf.serverIp}/queryBirthdayManage`, data);
}
export function removeBirthdayManage(data) {
  return apiConf.axios.post(`${apiConf.serverIp}/removeBirthdayManage`, data);
}
export function updateBirthdayManage(data) {
  return apiConf.axios.post(`${apiConf.serverIp}/updateBirthdayManage`, data);
}
