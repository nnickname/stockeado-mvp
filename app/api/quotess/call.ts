import axios from '../call';

export const createQuote = async (body: object) => {
    try{
        const response: any = await axios.post("/quotess", {...body}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        if(response?.data?.quote !== undefined){
            return response?.data?.quote;
        } else return null;
    }
    catch(error){
        return null;
    }
}
export const editQuote = async (body: object) => {
    try{
        const response: any = await axios.post("/quotess/edit", {...body}, {headers: {authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        if(response?.data?.quote !== undefined){
            return response?.data?.quote;
        } else return null;
    }
    catch(error){
        return null;
    }
}
export const getQuotes = async (id: string) => {
    try{
        const response: any = await axios.get("/quotess", {headers: {'token': id, authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        return response?.data?.quotes;
    }
    catch(error){
        return null;
    }
}

export const confirmQuote = async (id: string) => {
    try{
        const response: any = await axios.get("/quotess/edit", {headers: {'token': id, authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        return response?.data?.quote;
    }
    catch(error){
        return null;
    }
}

export const deleteQuote = async (id: string) => {
    try{
        const response: any = await axios.get("/quotess/delete", {headers: {'token': id, authorization: process.env.NEXT_PUBLIC_API_TOKEN}});
        return response?.data?.quote;
    }
    catch(error){
        return null;
    }
}