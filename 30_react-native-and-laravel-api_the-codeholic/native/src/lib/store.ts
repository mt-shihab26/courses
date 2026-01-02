import * as SecureStore from 'expo-secure-store';

export const store = {
    get: async (key: string): Promise<string | null> => {
        try {
            return await SecureStore.getItemAsync(key);
        } catch (error) {
            console.error('Failed to get data from store:', error);
            return null;
        }
    },
    set: async (key: string, value: string | number): Promise<void> => {
        try {
            const data: string = typeof value === 'number' ? `${value}` : value;
            await SecureStore.setItemAsync(key, data);
        } catch (error) {
            console.error('Failed to set data to store:', error);
        }
    },
    removeTheme: async (key: string): Promise<void> => {
        try {
            await SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.error('Failed to remove from store:', error);
        }
    },
};
