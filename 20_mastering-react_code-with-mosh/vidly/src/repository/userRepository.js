import { CreateUser, LoginUser, User } from "../model/userModel.js";
import hc from "../service/httpClient.js";
import { SERVER_ROOT_URI } from "../service/env.js";

const USERS_END_POINT = `${SERVER_ROOT_URI}/users`;

/**
 * @param {CreateUser} user
 * @returns {Promise<{user: User, status: number, log: string, token: string}>}
 */
export const saveUser = async p_User => {
    let status = null,
        log = null,
        user = null,
        token = null;
    try {
        const r = await hc.post(`${USERS_END_POINT}/register`, p_User);
        status = r.status;
        user = new User(r.data.email, r.data.name);
        token = r.headers["x-auth-token"];
    } catch (e) {
        status = e.response.status;
        if (status === 409) log = "User conflict";
        else log = "User can't created";
        user = null;
    }
    return { user, status, log, token };
};

/**
 * @param {LoginUser} user
 * @returns {Promise<{token: string, status: number, log: string}>}
 */
export const loginUser = async user => {
    let token = null,
        status = null,
        log = null;
    try {
        const r = await hc.post(`${USERS_END_POINT}/login`, user);
        token = r.data.access_token;
        status = r.status;
    } catch (e) {
        status = e.response.status;
        log = e.response.data.message;
    }
    return { token, status, log };
};
