import { BASE_API_URL } from "./env";

class Http {
    base_url: string;

    constructor(base_url: string) {
        this.base_url = base_url;
    }

    get = async (extraUrl: string) => {
        return await fetch(`${this.base_url}${extraUrl}`);
    };
}

const http = new Http(BASE_API_URL);
export default http;
