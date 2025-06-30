const button = document.getElementById("button");

let timeoutId;

button.addEventListener("click", () => {
    if (timeoutId) {
        console.log("clearing " + timeoutId);
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        console.log("Clicked");
    }, 500);
});
