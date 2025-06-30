const loadScriptPro = (src) => {
    const script = document.createElement("script");
    script.src = src;

    document.head.append(script);
    return new Promise((resolve, reject) => {
        script.onload = resolve(script);
        script.onerror = reject(new Error(`script loaded error for ${src}`))
    })
}

const lodash = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js";
const jquery = "https://code.jquery.com/jquery-3.6.0.slim.min.js";


loadScriptPro(lodash)
    .then(script => {
        console.log(`Cool, the script ${script.src} is loaded`);
        return loadScriptPro(jquery);
    })
    .then(script => {
        console.log(`Cool, the second script is loaded ${script.src}`);
    })
    .catch(err => console.log(err.massage))
