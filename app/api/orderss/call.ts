import axios from '../call';

export const createOrder = async (body: object) => {
    
    try{
        const response: any = await axios.post("/orderss", {...body});
        console.log(response);
        if(response?.data?.order !== undefined){
            return response?.data?.order;
        } else return null;
    }
    catch(error){
        return null;
    }
}
export const getOrders = async (id: string) => {
    
    try{
        
        const response: any = await axios.get("/orderss/edit", {headers: {'token': id}});
        console.log(response);
        return response?.data?.orders;
    }
    catch(error){
        return null;
    }
}
export const updateOrderState = async (body: object) => {
    
    try{
        
        const response: any = await axios.post("/orderss/edit", body);
        if(response?.data?.order !== undefined){
            return response?.data?.order;
        } else return null;
    }
    catch(error){
        return null;
    }
}
export const getOrder = async (id: string) => {
    
    try{
        
        const response: any = await axios.get("/orderss", {headers: {'token': id}});
        return response?.data?.order;
    }
    catch(error){
        return null;
    }
}
