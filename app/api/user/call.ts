import Cookie from 'universal-cookie';
import axios from '../call';
import { WorkShopOptions } from '@/components/panel/sidebar';

export const loginUser = async (email: string, password: string) => {
    
    try{
        const cookies = new Cookie();
        const response: any = await axios.post("/user/login", {email, password}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        if(response?.data?.user !== undefined){
            cookies.set('access_token', response?.data?.token, {secure: false, path: '/' })
            return response?.data?.user;
        } else return false;
    }
    catch(error){
        return false;
    }
}
export const getUserById = async (id: string) => {
    try{
        const response: any = await axios.get("/user/login", {headers: {'token': id, authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
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
        const response: any = await axios.get("/user", {headers: {'token': token, authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        return response?.data?.user;
    }
    catch(error){
        return null;
    }
}

export const editUser = async (body: Object) => {
    
    try{
        const response: any = await axios.post("/user/edit", {...body}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
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
        const cookies = new Cookie();
        const response: any = await axios.post("/user/edit/create", {...body}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        if(response?.data?.user !== undefined && response?.data?.user !== null){
            cookies.set('access_token', response?.data?.token, { path: '/' })
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}

export const verifyUserWorkshop = (userr: any, router: any, route: string) => {
    const cookies = new Cookie();
    if(userr === undefined || userr === null){
        router.push('/');
        return false;
    }
    if(userr?.type !== 'workshop'){
        router.push('/provider/home');
        return false;
    }
    const routeCast = WorkShopOptions.find((e) => e?.route === route);
    const role = routeCast?.roles?.find((e) => e === userr?.role);
    if(role?.length > 0){
        return true;
    } else {
        if(route === '/workshop/home'){
            cookies.remove('access_token');
            router.push('/signin');
        }
        router.push('/workshop/home');
        return false;
    }
}
