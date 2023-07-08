import axios from 'axios'

const API_URL = "http://localhost:5000"

const registerAction = async function(userData){
    
        const response = await axios.post(`${API_URL}/register`, userData)
        
        return await response.data

    
}

const authServicesActions = {
    registerAction:registerAction
}

export default authServicesActions