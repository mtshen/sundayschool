import axios from "axios";

const curHost = location.hostname === "localhost" ? "47.92.226.156" : location.host;

export default {
  ip: curHost,
};
