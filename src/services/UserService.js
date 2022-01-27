import axios from "axios";
import AxiosService from "./AxiosService";


let url = 'http://localhost:4000';

const UserService = {
    signup: (data) => {
        return AxiosService.postService(`${url}/users/register`, data)
    },
    signin: (data) => {
        return AxiosService.postService(`${url}/users/login`, data)
    },
    forgetpassword: (data) => {
        return AxiosService.postService(`${url}/users/userSignUp`, data)
    },
    forgetemail: (data) => {
        return AxiosService.postService(`${url}/users/`, data)
    },
    testapi:(data)=>{
        return axios.post(`${url}/users/testapi`)
    }
}

export default UserService;