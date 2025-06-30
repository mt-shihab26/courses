import { BASE_API_URL } from "./env";

class Http {
    base_url: string;

    constructor(base_url: string) {
        this.base_url = base_url;
    }

    get = async (extraUrl: string) => {
        return await fetch(`${this.base_url}${extraUrl}`);
    };

    patch = async (extraUrl: string, body: any) => {
        return fetch(`${this.base_url}${extraUrl}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    };
    post = (extraUrl: string, body: any) => {
        return fetch(`${this.base_url}${extraUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    };
    delete(extraUrl: string) {
        return fetch(`${this.base_url}${extraUrl}`, { method: "DELETE" });
    }
}

const http = new Http(BASE_API_URL);
export default http;
