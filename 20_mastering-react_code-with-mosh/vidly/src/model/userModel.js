export class User {
    /**
     * @param {string} email
     * @param {string} name
     */
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}

export class CreateUser {
    /**
     *
     * @param {string} email
     * @param {string} name
     * @param {string} password
     */
    constructor(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
}

export class LoginUser {
    /**
     *
     * @param {string} email
     * @param {string} password
     */
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
