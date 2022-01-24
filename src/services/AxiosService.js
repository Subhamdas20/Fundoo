import axios from 'axios';

const AxiosService = {
    postService: (url, data, headers = false) => {
        return axios.post(url, data, headers);
    }
}
export default AxiosService;