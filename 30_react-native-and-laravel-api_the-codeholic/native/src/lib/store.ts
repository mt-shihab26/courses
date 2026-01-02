import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export const store = {
    get: async (key: string): Promise<string | null> => {
        try {
            if (isWeb) {
                return localStorage.getItem(key);
            }
            return await SecureStore.getItemAsync(key);
        } catch (error) {
            console.error('Failed to get data from store:', error);
            return null;
        }
    },
    set: async (key: string, value: string | number): Promise<void> => {
        try {
            const data: string = typeof value === 'number' ? `${value}` : value;
            if (isWeb) {
                localStorage.setItem(key, data);
                return;
            }
            await SecureStore.setItemAsync(key, data);
        } catch (error) {
            console.error('Failed to set data to store:', error);
        }
    },
    remove: async (key: string): Promise<void> => {
        try {
            if (isWeb) {
                localStorage.removeItem(key);
                return;
            }
            await SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.error('Failed to remove from store:', error);
        }
    },
};
