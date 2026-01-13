import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["message"];
    static values = { duration: { type: Number, default: 5000 } };

    connect() {
        this.messageTargets.forEach(message => {
            this.autoDismiss(message);
        });
    }

    autoDismiss(element) {
        setTimeout(() => {
            this.dismiss({ currentTarget: element });
        }, this.durationValue);
    }

    dismiss(event) {
        const button = event.currentTarget;
        const element = button.closest('[data-toast-target="message"]');

        element.classList.remove("toast-enter");
        element.classList.add("toast-exit");

        setTimeout(() => {
            element.remove();

            if (this.messageTargets.length === 0) {
                this.element.remove();
            }
        }, 300);
    }
}
