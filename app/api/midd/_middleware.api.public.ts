import { headers } from 'next/headers';
export default function middlewareApiPublic(){
    const token = headers().get('Authorization');
    if (token === null) {
        return false
    } else {
        if(token === process.env.NEXT_PUBLIC_API_SYNC_TOKEN){
            return true
        }
        return false;   
    }

}
