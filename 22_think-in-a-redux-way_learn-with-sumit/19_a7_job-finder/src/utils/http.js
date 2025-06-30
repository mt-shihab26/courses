class Http {
    constructor(base_url) {
        this.base_url = base_url;
    }
    /**
     * @param {string} extraUrl
     * @returns
     */
    get = async extraUrl => {
        return await fetch(`${this.base_url}${extraUrl}`);
    };

    /**
     * @param {string} extraUrl
     * @param {Object} body
     */
    patch = async (extraUrl, body) => {
        return fetch(`${this.base_url}${extraUrl}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    };

    /**
     *
     * @param {string} extraUrl
     */
    delete = async extraUrl => {
        return fetch(`${this.base_url}${extraUrl}`, { method: "DELETE" });
    };

    /**
     * @param {string} extraUrl
     * @param {Object} body
     */
    post = async (extraUrl, body) => {
        return fetch(`${this.base_url}${extraUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    };
}

const http = new Http("http://localhost:9000");
export default http;
