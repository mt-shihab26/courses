export class CreateUpdateMovie {
    /**
     *
     * @param {string} title
     * @param {string} genreId
     * @param {number} numberInStock
     * @param {number} dailyRentalRate
     */
    constructor(title, genreId, numberInStock, dailyRentalRate) {
        this.title = title;
        this.genreId = genreId;
        this.numberInStock = numberInStock;
        this.dailyRentalRate = dailyRentalRate;
    }
}

export class Movie {
    /**
     *
     * @param {string} _id
     * @param {string} title
     * @param {string} genreId
     * @param {number} numberInStock
     * @param {number} dailyRentalRate
     * @param {boolean} isHearted
     */
    constructor(_id, title, genreId, numberInStock, dailyRentalRate, isHearted) {
        this._id = _id;
        this.title = title;
        this.genreId = genreId;
        this.numberInStock = numberInStock;
        this.dailyRentalRate = dailyRentalRate;
        this.isHearted = isHearted;
    }
}
