import axios from 'axios'

const API_URL = "https://airbnb-black-gamma.vercel.app/admin"

const registerAction = async function(userData){
    
        const response = await axios.post(`${API_URL}/register`, userData)
        
        return await response.data

    
}

const loginAction = async function(user){
    const response = await axios.post(`${API_URL}/login`,user)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logoutAction = async function(){
    return localStorage.removeItem('user')
}

const authServicesActions = {
    registerAction:registerAction,
    loginAction:loginAction,
    logoutAction:logoutAction
}

export default authServicesActions