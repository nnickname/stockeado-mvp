import Cookie from 'universal-cookie';
import axios from '../call';



export const setCartCookies = (name: string, value: string) => {
    const cookies = new Cookie();
    console.log(name, value);
    cookies.set(name, value, {path: '/'});
}
export const getCartCookies = () => {
    const cookies = new Cookie();
    
    const cart = cookies.getAll();
    console.log(cart);
    return cart
}
export const deleteInventory = async (id: any) => {
    try{
        const response: any = await axios.get("/inventory/edit", {headers: {'id': id}});
        if(response?.data?.deleted !== undefined){
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}

export const createInventory = async (body: Object) => {
    
    try{
        const response: any = await axios.post("/inventory", {...body});
        console.log(response.data);
        if(response?.data?.item !== undefined){
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}

export const createManyInventories = async (body: any) => {
    
    try{
        const response: any = await axios.post("/inventory/load", {items: [...body] });
        if(response?.data?.item !== undefined){
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}

export const editInventory = async (body: Object) => {
    
    try{
        const response: any = await axios.post("/inventory/edit", {...body});
        console.log(response.data);
        if(response?.data?.item !== undefined){
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}
export const getInventory = async () => {
    
    try{
        const cookies = new Cookie();
        const token = cookies.get('access_token');
        const response: any = await axios.get("/inventory", {headers: {'token': token}});
        return response?.data?.items;
    }
    catch(error){
        return null;
    }
}

export const getMarketPlace = async (id: string) => {
    
    try{
        const response: any = await axios.get("/inventory/marketplace", {headers: {'id': id}});
        console.log(response);
        return response?.data;
    }
    catch(error){
        return null;
    }
}