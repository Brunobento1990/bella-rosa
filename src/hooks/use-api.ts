import axios from "axios";

function getSocket() {
    const baseUrl = "https://localhost:44345/api/"
    //const baseUrl = "https://api-server.shop/api/"
    const localAuth = localStorage.getItem('token');
    const auth = localAuth ? localAuth : '';

    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${auth}`,
            apiKey: "d7c2fc0d-9049-41d2-8df4-f42a97b315b4"
        }
    })
}

export function useApi(){
    async function get(url: string) {
        try {
            const api = getSocket();
            return (await api.get(url)).data;
        } catch (error: any) {
            console.log(error)
        }
    }

    return{
        get,

    }
}