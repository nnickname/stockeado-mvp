import axios from '../call';

export const sendMailHookApi = async (body: Object) => {
    
    try{
        const response: any = await axios.post("/email", {...body}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        if(response?.data?.send){
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}