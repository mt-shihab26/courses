import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static KEY = "dark-mode";

    connect() {
        const darkMode = localStorage.getItem(this.KEY);
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
            localStorage.setItem(this.KEY, "disabled");
        } else {
            html.classList.add("dark");
            localStorage.setItem(this.KEY, "enabled");
        }
    }
}
