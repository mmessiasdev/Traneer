import { BASELOGIN } from "../config";
import axios from "axios";

function authenticate(credentials) {
    return axios.post(BASELOGIN, credentials, console.log(credentials)).then(res => console.log(res));
}

export default {
    authenticate,
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