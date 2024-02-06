import Cookie from 'universal-cookie';
import axios from '../../call';

export const loginUser = async (email: string, password: string) => {
    
    try{
        const cookies = new Cookie();
        const response: any = await axios.post("/user/login", {email, password});
        console.log(response.data);
        if(response?.data?.user !== undefined){
            cookies.set('access_token', response?.data?.token, { path: '/' })
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}

export const getUser = async (token: string) => {
    
    try{
        const response: any = await axios.get("/user", {headers: {'token': token}});
        return response?.data?.user;
    }
    catch(error){
        return null;
    }
}