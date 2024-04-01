import Cookie from 'universal-cookie';
import axios from '../call';



export const setCartCookies = (name: string, value: string) => {
    const cookies = new Cookie();
    cookies.set(name, value, {path: '/'});
}
export const getCartCookies = () => {
    const cookies = new Cookie();
    
    const cart = cookies.getAll();
    return cart
}
export const deleteInventory = async (id: any) => {
    try{
        const response: any = await axios.get("/inventoryy/edit", {headers: {'id': id}});
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
        const response: any = await axios.post("/inventoryy", {...body});
        if(response?.data?.item !== undefined){
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}
export const getInventoryById = async (id: string) => {
    
    try{
        const response: any = await axios.get("/inventoryy/load", {headers: {'id': id}});
        console.log(response);
        if(response?.data?.item !== undefined){
            return response?.data?.item;
        } else return null;
    }
    catch(error){
        return null;
    }
}
export const createManyInventories = async (body: any) => {
    
    try{
        const response: any = await axios.post("/inventoryy/load", {items: [...body] });
        console.log(response)
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
        const response: any = await axios.post("/inventoryy/edit", {...body});
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
        const response: any = await axios.get("/inventoryy", {headers: {'token': token}});
        return response?.data?.items;
    }
    catch(error){
        return null;
    }
}

export const getMarketPlace = async (id: string) => {
    
    try{
        const response: any = await axios.get("/inventoryy/marketplace", {headers: {'id': id}});
        return response?.data;
    }
    catch(error){
        return null;
    }
}