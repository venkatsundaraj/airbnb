import axios from 'axios'

const API_URL = "http://localhost:8000"
// const API_URL = "http://137.184.80.13/"

const registerAction = async function (userData) {

    const response = await axios.post(`${API_URL}/api/register`, userData)

    console.log(response.data)

    return response.data


}

const loginAction = async function (user) {
    const response = await axios.post(`${API_URL}/api/login`, user)

    console.log(response.data)

    if (response.data.status === "ok") {
        localStorage.setItem('user', JSON.stringify(response.data))
    }



    return response.data

}

const logoutAction = async function () {
    return localStorage.removeItem('user')
}

const authServicesActions = {
    registerAction: registerAction,
    loginAction: loginAction,
    logoutAction: logoutAction
}

export default authServicesActions