import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { useEffect, useState } from 'react';

import { Platform } from 'react-native';

const web = Platform.OS === 'web';

export const store = {
    get: async (key: string): Promise<string | null> => {
        try {
            if (web) return localStorage.getItem(key);
            return await getItemAsync(key);
        } catch (error) {
            console.error('Failed to get data from store:', error);
            return null;
        }
    },
    set: async (key: string, value: string | number): Promise<void> => {
        try {
            const data: string = typeof value === 'number' ? `${value}` : value;
            if (web) return localStorage.setItem(key, data);
            await setItemAsync(key, data);
        } catch (error) {
            console.error('Failed to set data to store:', error);
        }
    },
    remove: async (key: string): Promise<void> => {
        try {
            if (web) return localStorage.removeItem(key);
            await deleteItemAsync(key);
        } catch (error) {
            console.error('Failed to remove from store:', error);
        }
    },
};

export const useStore = <T extends string = string>(key: string): [boolean, T | null, (value: T) => Promise<void>] => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState<T | null>(null);

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            const value = await store.get(key);
            setValue(value as T | null);
            setLoading(false);
        };

        init();
    }, [key]);

    const set = async (value: T) => {
        setLoading(true);
        setValue(value);
        await store.set(key, value);
        setLoading(false);
    };

    return [loading, value, set];
};
