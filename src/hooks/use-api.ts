import axios from "axios";
import { useLoader } from "../components/loading";

function getSocket() {
    //const baseUrl = "https://localhost:44345/api/"
    const baseUrl = "https://api-server.shop/api/"
    const localAuth = localStorage.getItem('token');
    const auth = localAuth ? localAuth : '';

    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${auth}`,
            apiKey: "7b7a3ecb-245a-49a2-87ae-d54734353515"
        }
    })
}

export function useApi(){

    const loader = useLoader();

    async function get(url: string) {
        try {
            const api = getSocket();
            loader.show();
            return (await api.get(url)).data;
        } catch (error: any) {
            console.log(error)
        }finally{
            loader.hide();
        }
    }

    return{
        get,

    }
}
