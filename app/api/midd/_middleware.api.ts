import { headers } from 'next/headers';
export default function middlewareApi(){
    const token = headers().get('Authorization');
    return process.env.API_KEY;
    if (token === null) {
        return false
    } else {
        if(token === process.env.API_KEY){
            return true
        }
        return false;   
    }

}
