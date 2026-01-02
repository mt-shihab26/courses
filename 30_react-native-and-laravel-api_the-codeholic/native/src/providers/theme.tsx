import type { TScheme, TTheme } from '@/types/utils';
import type { ReactNode } from 'react';

import { useStore } from '@/hooks/use-store';
import { createContext, useContext, useEffect } from 'react';
import { useUniwind } from 'uniwind';

import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import { Uniwind } from 'uniwind';

import { THEME_KEY } from '@/lib/keys';
import { NAV_THEME } from '@/lib/theme';

type TThemeContext = {
    loading: boolean;
    scheme: TScheme;
    theme: TTheme;
    setTheme: (theme: TTheme) => Promise<void>;
};

const ThemeContext = createContext<TThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [loading, storedTheme, setStoredTheme] = useStore<TTheme>(THEME_KEY);

    const { theme: scheme, hasAdaptiveThemes } = useUniwind();

    const theme: TTheme = hasAdaptiveThemes ? 'system' : scheme;

    useEffect(() => {
        if (storedTheme) {
            Uniwind.setTheme(storedTheme);
        }
    }, [storedTheme]);

    const setTheme = async (theme: TTheme) => {
        await setStoredTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{ loading, scheme, theme, setTheme }}>
            <NavigationThemeProvider value={NAV_THEME[scheme || 'light']}>
                {loading && (
                    <View className="absolute top-15 right-0 left-0 z-999 items-center">
                        <ActivityIndicator size="large" />
                    </View>
                )}
                {children}
            </NavigationThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): TThemeContext => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
