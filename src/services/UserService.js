import AxiosService from "./AxiosService";

let url = 'http://fundoonotes.incubation.bridgelabz.com/api';

const UserService = {
    signup: (data) => {
        return AxiosService.postService(`${url}/users/userSignUp`, data)
    },
    signin: (data) => {
        return AxiosService.postService(`${url}/users/userSignUp`, data)
    },
    forgetpassword: (data) => {
        return AxiosService.postService(`${url}/users/userSignUp`, data)
    }
}

export default UserService;