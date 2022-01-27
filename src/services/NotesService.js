
import AxiosService from "./AxiosService";

let url = 'http://localhost:4000';

const header = {
    headers: {
        token: localStorage.getItem("token"),
    },
}
const NotesService = {
    addnotes: (data) => {
        return AxiosService.postService(`${url}/notes/addnotes`, data, header)
    },
    getnotes: (data) => {
        return AxiosService.getService(`${url}/notes/getnotes`,header)
    }
}

export default NotesService;