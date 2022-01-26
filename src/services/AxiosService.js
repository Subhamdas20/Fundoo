import axios from 'axios';

const AxiosService = {
    postService: (url, data, headers = false) => {
        let response=axios.post(url, data, headers);
        console.log("Checking response",response);
        return response;
    }
}
export default AxiosService;