import api from "./http"

type SignInRequestData  = {
    username: string;
    password: string;
}

export async function signInRequest(data: SignInRequestData ){
    let token, user;

    await api.post('/api/auth/token/', data).then((response) => {
        token = response.data.access
    })

    await api.get('/api/auth/user/', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((response) => {
        user = response.data
    })
    
    return {
        token,
        user
    }
}

export function getUser(){
    return api.get('/api/auth/user/');
}
