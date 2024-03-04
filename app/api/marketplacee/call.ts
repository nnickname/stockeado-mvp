import Cookie from 'universal-cookie';
import axios from '../call';

export const findProduct = async (keyword: string) => {
    
    try{
        const response: any = await axios.get("/marketplacee", {headers: {'token': keyword}});
        if(response?.data?.items !== undefined){
            return response?.data?.items;
        } else return null;
    }
    catch(error){
        return null;
    }
}