import { jwtDecode } from "jwt-decode";
import axios from "axios";

function authenticate(credentials) {

    const BASEURL = process.env.REACT_APP_BASEURL;
    const BASELOGIN = process.env.REACT_APP_BASELOGIN;


    return axios.post(BASEURL + BASELOGIN, credentials, console.log(credentials)).then(res => res.data).then(data => {
        window.localStorage.setItem("authToken", data.jwt)
        window.localStorage.setItem("username", data.user.username)
        axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
        console.log(isAuthenticated());
    });
}

function isAuthenticated(){
    const token = window.localStorage.getItem("authToken")

    if(token){
        const {exp} = jwtDecode(token)
        if (exp * 1000 > new Date().getTime()) {
            return true
        }
        return false
    }
}

export default {
    authenticate,
    isAuthenticated
};


// function authenticate(credentials) {
//     return fetch(BASELOGIN, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         window.localStorage.setItem("authToken", data.jwt);
//         window.localStorage.setItem("email", data.user.username);
//         console.log(credentials);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
// }