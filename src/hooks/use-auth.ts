export function useAuth(){
    
    function setToken(token:string){
        localStorage.setItem('token', token)
    }

    return{
        setToken
    }
}