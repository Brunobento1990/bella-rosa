import { useNavigate } from "react-router-dom";
import { useApi } from "./use-api";

export function useAuth(){
    
    const api = useApi();
    const navigate = useNavigate();
    
    
    async function verifyAuth() : Promise<boolean>{

        const response = await api.get('get-client');
        if(!response) navigate('/account/login');

        return true;
    }

    return{
        verifyAuth
    }
}