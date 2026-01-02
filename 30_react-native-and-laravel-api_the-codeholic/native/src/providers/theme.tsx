import { useStore } from '@/hooks/use-store';
import { NAV_THEME } from '@/lib/theme';
import { TTheme } from '@/types/utils';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { type ReactNode, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Uniwind, useUniwind } from 'uniwind';

const THEME_KEY = 'app-theme-preference';

export const useTheme = () => {
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

    return {
        loading,
        scheme,
        theme,
        setTheme,
    };
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { loading, scheme } = useTheme();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return <NavigationThemeProvider value={NAV_THEME[scheme || 'light']}>{children}</NavigationThemeProvider>;
};
