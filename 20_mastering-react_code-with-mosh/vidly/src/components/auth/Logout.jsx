import * as authService from "../../service/authService.js";

const Logout = () => {
    if (authService.getToken()) {
        authService.removeToken();
        window.location = "/";
    }
    return <div></div>;
};

export default Logout;
