const get_button = document.querySelector("#get-button");
const send_button = document.querySelector("#send-button");

// GET, POST, PUT, DELETE, OPTIONS, HEAD

const send_request = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(data));
        xhr.onload = () => {
            if (xhr.status >= 400) reject(xhr.response);
            else resolve(xhr.response);
        }
        xhr.onerror = () => {
            reject("Something was worng");
        }
    });
    return promise;
};

const get_data = () => {
    send_request("GET", "https://jsonplaceholder.typicode.com/todo/1")
        .then(res => console.log(res))
        .catch(err => console.log(err));
};


const send_data = () => {
    send_request("POST", "https://jsonplaceholder.typicode.com/posts",
        { title: "foo", body: "bar", userId: 1 })
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

get_button.addEventListener("click", get_data);
send_button.addEventListener("click", send_data);
