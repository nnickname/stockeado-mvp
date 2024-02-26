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