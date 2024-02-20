
import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000/api",
  
  withCredentials: true,
  headers: {
    'Content-type': "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
  }
});