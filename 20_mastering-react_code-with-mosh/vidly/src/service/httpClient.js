import axios from "axios";
import { toast } from "react-toastify";
import * as authService from "./authService.js";
import { log } from "./logService.js";

axios.defaults.headers.common["x-auth-token"] = authService.getToken();

axios.interceptors.response.use(null, e => {
    const expectedError =
        e.response && e.response.status >= 400 && e.response.status < 500;

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
