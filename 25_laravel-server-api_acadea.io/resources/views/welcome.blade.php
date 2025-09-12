<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<div id="data"></div>

<script>

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }

    const request = (url, options) => {
        const csrfToken = getCookie('XSRF-TOKEN');

        return fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'X-XSRF-TOKEN': decodeURIComponent(csrfToken),
            },
            credentials: "include",
            ...options
        })
    }


    const login = async () => {
        const response = await request("/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: "sm2@gmail.com",
                password: "12345678"
            })
        })

        console.log(await response.json());
    }

    const logout = async () => {
       await request("/api/v1/auth/logout", {
            method: "POST",
        })
    }

    fetch("/sanctum/csrf-cookie", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        credentials: "include"
    }).then(() => {
        logout()
    }).then(() => {
        login();
    }).then(async () => {
        const response = await request("/api/v1/posts");
        const posts = await response.json();

        document.getElementById("data")
            .innerHTML = JSON.stringify(posts, null, 2);
    });

</script>
</body>
</html>
