import Cookie from 'universal-cookie';
import axios from '../call';

export const loginUser = async (email: string, password: string) => {
    
    try{
        const cookies = new Cookie();
        const response: any = await axios.post("/user/login", {email, password});
        if(response?.data?.user !== undefined){
            cookies.set('access_token', response?.data?.token, { path: '/' })
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}
export const getUserById = async (id: string) => {
    try{
        const response: any = await axios.get("/user/login", {headers: {'token': id}});
        console.log(response);
        return response?.data?.user;
    }
    catch(error){
        return null;
    }
}
export const getUser = async () => {
    
    try{
        const cookies = new Cookie();
        const token = cookies.get('access_token');
        const response: any = await axios.get("/user", {headers: {'token': token}});
        return response?.data?.user;
    }
    catch(error){
        return null;
    }
}

export const editUser = async (body: Object) => {
    
    try{
        const response: any = await axios.post("/user/edit", {...body});
        if(response?.data?.user !== undefined){
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}
export const createUser = async (body: Object) => {
    
    try{
        const response: any = await axios.post("/user/edit/create", {...body});
        if(response?.data?.user !== undefined){
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}

