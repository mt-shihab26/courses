import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "", setTheme: () => {} });

export const useTheme = () => {
    const r = useContext(ThemeContext);
    return [r.theme, r.setTheme];
};

const getThemeFromLocalStorageOrOS = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
        return theme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
};

const toggleThemeLogic = theme => {
    const html = document.querySelector("html");
    if (theme == "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getThemeFromLocalStorageOrOS());

    toggleThemeLogic(theme);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme: t => {
                    localStorage.setItem("theme", t);
                    setTheme(t);
                },
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
