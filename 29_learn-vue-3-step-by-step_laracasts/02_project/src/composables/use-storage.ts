import { ref, watch } from 'vue';

export const useStorage = (key: string, defaultValue?: string) => {
    const storedValue = localStorage.getItem(key);

    const value = ref<string>(storedValue || defaultValue || '');

    const write = (val: string) => {
        if (val.trim().length === 0) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, val);
        }
    };

    if (!storedValue) {
        write(defaultValue || '');
    }

    watch(value, write);

    return value;
};
