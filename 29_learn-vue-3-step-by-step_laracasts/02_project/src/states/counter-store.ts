import { reactive } from 'vue';

export const counter = reactive({
    // states
    count: 0,

    // actions
    increment() {
        this.count++;
    },
});
