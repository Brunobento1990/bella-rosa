import axios from "axios";
import { useLoader } from "../components/loading";

function getSocket() {
    //const baseUrl = "https://localhost:44345/api/"
    const baseUrl = "https://trevo.space/api/"
    const localAuth = localStorage.getItem('token');
    const auth = localAuth ? localAuth : '';

    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${auth}`,
            apiKey: "83f57599-d1c9-4ba8-88bf-1551cdaa5a9d"
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
