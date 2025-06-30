import jwtDecode from "jwt-decode";

const TOKEN_NAME = "token";

export const storeToken = token => {
    localStorage.setItem(TOKEN_NAME, token);
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_NAME);
};

export const decodeToken = () => {
    try {
        const token = getToken();
        return jwtDecode(token);
    } catch (e) {
        throw e;
    }
};
