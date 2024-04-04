import { headers } from 'next/headers';
export default function middlewareApi(){
    const token = headers().get('Authorization');
    console.log(token);
    console.log(process.env.NEXT_PUBLIC_API_TOKEN);
    if (token === null) {
        return false
    } else {
        if(token === process.env.NEXT_PUBLIC_API_TOKEN){
            return true
        }
        return false;   
    }

}
