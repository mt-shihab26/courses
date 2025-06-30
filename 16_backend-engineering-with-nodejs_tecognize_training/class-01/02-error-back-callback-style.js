function loadScript(src, callback) {
    // create a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when completed 
    const script = document.createElement("script");
    script.src = src;

    script.onload = callback(null, script);
    script.onerror = callback(new Error(`script loaded error for ${src}`))
    document.head.append(script);
}

const lodash = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js";
const jquery = "https://code.jquery.com/jquery-3.6.0.slim.min.js";

loadScript(lodash, (err, script) => {
    if (err) {
        console.log("There was a error");
    }
    else {
        alert(`Cool, the script ${script.src} is loaded`);

        loadScript(jquery, (err, script) => {
            if (err) {
                console.log("There was a error");
            }
            else {
                alert(`Cool, the second script is loaded ${script.src}`)
            }
        })
    }
})