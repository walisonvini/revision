import axios from "axios";
import { parseCookies } from 'nookies';

const { "revision-token": token } = parseCookies()

if(token) {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default axios.create({
  baseURL: "http://localhost:8000"
});
