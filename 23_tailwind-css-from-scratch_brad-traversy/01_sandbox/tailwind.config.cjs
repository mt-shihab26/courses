/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.jsx"],
    theme: {
        fontFamily: {
            sans: ["ui-sans-serif", "system-ui"],
            serif: ["Tapestry", "Georgia"],
            mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
            display: ["Oswald"],
            body: ['"Open Sans"'],
        },
        extend: {
            transitionDuration: {
                2000: "2000ms",
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                wiggle: "wiggle 1s ease-in-out infinite",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-12deg)" },
                    "50%": { transform: "rotate(12deg)" },
                },
            },
            screens: {
                sm2: "550px",
                md2: "800px",
                lg2: "1200px",
                xl2: "1440px",
            },
            fontFamily: {
                sans2: ["Graphik", "sans-serif"],
                serif2: ["Meeriweather", "serif"],
            },
            colors: {
                primary: "#ff5733",
                secondary: "#fffc33",
            },
            spacing: {
                6: "2.5rem",
                128: "32rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    plugins: [],
};
