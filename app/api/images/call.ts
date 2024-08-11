import axios from '../call';

export const uploadApiImage = async (body: Object) => {
    
    try{
        const response: any = await axios.post("/images/upload", {object: body}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        if(response?.data?.image){
            return response?.data?.image;
        } else return null;
    }
    catch(error){
        return null;
    }
}
export const getApiImage = async (id: String) => {
    
    try{
        const response: any = await axios.post("/images/get", {_id: id}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        if(response?.data?.image){
            return response?.data?.image;
        } else return null;
    }
    catch(error){
        return null;
    }
}