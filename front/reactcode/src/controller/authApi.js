import axios from "axios";

function authentication(credentials){
    return axios.post(process.env.URL_LOGIN, credentials).than(res => res.data).than(data => {
        window.localStorage.setItem("authToken", data.jwr);
        window.localStorage.setItem("username", data.user.username);
        axios.defaults.headers["Authorization"] = "Bearer" + data.jwt

    })
}

export default {
    authenticate
};