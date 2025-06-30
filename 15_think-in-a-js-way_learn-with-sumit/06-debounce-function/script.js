const button = document.getElementById("button");

const debounce = (fn, delay) => {
    let timeoutId;
    return () => {
        if (timeoutId) {
            console.log("clearing " + timeoutId);
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn();
        }, delay);
    };
};

button.addEventListener(
    "click",
    debounce(() => {
        console.log("Clicked");
    }, 2000)
);
