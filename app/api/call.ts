
import axios from "axios";
export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URI,
  
  withCredentials: true,
  headers: {
    'Content-type': "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
  }
});