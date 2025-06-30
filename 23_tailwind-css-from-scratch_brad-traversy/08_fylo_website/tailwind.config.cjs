/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                dark: {
                    "blue-0": "hsl(217, 28%, 15%)",
                    "blue-1": "hsl(217, 28%, 13%)",
                    "blue-2": "hsl(216, 53%, 9%)",
                    "blue-3": "hsl(219, 30%, 18%)",
                },
                accent: {
                    cyan: "hsl(176, 68%, 64%)",
                    blue: "hsl(198, 60%, 50%)",
                },
                light: {
                    red: "hsl(0, 100%, 63%)",
                },
            },
            fontFamily: {
                sans: ["Raleway", "sans-serif"],
                opensans: ["Open Sans", "sans-serif"],
            },
            backgroundImage: theme => ({
                "logo-dark": "url('../images/logo-dark-mode.svg')",
                "logo-light": "url('../images/logo-light-mode.svg')",
                "curvy-dark": "url('../images/bg-curvy-dark-mode.svg')",
                "curvy-light": "url('../images/bg-curvy-light-mode.svg')",
            }),
        },
    },
    variants: {
        extend: {
            backgroundImage: ["dark"],
        },
    },
    darkMode: "class",
    plugins: [],
};
