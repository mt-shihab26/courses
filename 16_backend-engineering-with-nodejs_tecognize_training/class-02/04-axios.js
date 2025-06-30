const axios = require("axios");

const oneUrl = "https://rickandmortyapi.com/api/character/2"

const x = async () => {
    try {
        const oneChar = await axios.get(oneUrl);
        const oneLocationUrl = oneChar.data.location.url;
        const location = await axios.get(oneLocationUrl);
        console.log(JSON.stringify(location.data));
    } catch (err) {
        console.log(err);
    }
};

x();