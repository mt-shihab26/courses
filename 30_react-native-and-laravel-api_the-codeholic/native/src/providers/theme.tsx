import type { TScheme, TTheme } from '@/types/utils';
import type { ReactNode } from 'react';

import { useStore } from '@/hooks/use-store';
import { createContext, useContext, useEffect } from 'react';
import { useUniwind } from 'uniwind';

import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import { Uniwind } from 'uniwind';

import { NAV_THEME } from '@/lib/theme';

const THEME_KEY = 'app-theme-preference';

type TThemeContext = {
    loading: boolean;
    scheme: TScheme;
    theme: TTheme;
    setTheme: (theme: TTheme) => Promise<void>;
};

const ThemeContext = createContext<TThemeContext | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

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

    const value: TThemeContext = {
        loading,
        scheme,
        theme,
        setTheme,
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <ThemeContext.Provider value={value}>
            <NavigationThemeProvider value={NAV_THEME[scheme || 'light']}>{children}</NavigationThemeProvider>
        </ThemeContext.Provider>
    );
};
