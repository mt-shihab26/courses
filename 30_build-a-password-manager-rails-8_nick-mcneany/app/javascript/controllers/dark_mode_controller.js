import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        const darkMode = localStorage.getItem("dark-mode");
        if (darkMode === "enabled") {
            document.documentElement.classList.add("dark");
        } else if (darkMode === null) {
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
            }
        }
    }

    toggle() {
        const html = document.documentElement;

        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("dark-mode", "disabled");
        } else {
            html.classList.add("dark");
            localStorage.setItem("dark-mode", "enabled");
        }
    }
}
