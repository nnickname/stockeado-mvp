import Cookie from 'universal-cookie';
import axios from '../../call';
export const loginUser = async (email: string, password: string) => {
    
    try{
        const cookies = new Cookie();
        console.log(email, password)

        const response: any = await axios.post("/user/login", {email, password});
        if(response.user !== undefined){
            cookies.set('access_token', response.token, { path: '/' })
            response.user.login = true;
            return true;
        } else return false;
    }
    catch(error){
        return false;
    }
}