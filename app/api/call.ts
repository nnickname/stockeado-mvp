
import axios from "axios";
import Cookie from 'universal-cookie';

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

export const callApiHookPost = async (uri: string, body: any ) => {
  try{
      const cookies = new Cookie();
      const response: any = await axios.post(uri, {...body}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
      if(response?.data !== undefined && response?.data !== null){
          return response.data;
      } else return null;
  }
  catch(error){
      return null;
  }
}