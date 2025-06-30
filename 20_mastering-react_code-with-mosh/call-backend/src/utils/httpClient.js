import axios from "axios";
import { toast } from "react-toastify";
import { log } from "../utils/logService.js";

axios.interceptors.response.use(null, e => {
    const expectedError =
        e.response && e.response.status >= 400 && e.response.status <= 499;

    if (!expectedError) {
        log("Logging the error", e);
        toast("An unexpected error occurred.");
    }

    return Promise.reject(e);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
};
