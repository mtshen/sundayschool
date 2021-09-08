import apiConf, { axios } from "./index";

export function addBirthdayManage(data) {
  return axios.post(`${apiConf.serverIp}/addBirthdayManage`, data);
}
