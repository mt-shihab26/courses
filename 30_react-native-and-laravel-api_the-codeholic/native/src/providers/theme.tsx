import { store, useStore } from '@/hooks/use-store';
import { NAV_THEME } from '@/lib/theme';
import { TTheme } from '@/types/utils';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { type ReactNode, useEffect } from 'react';
import { Uniwind, useUniwind } from 'uniwind';

const THEME_KEY = 'app-theme-preference';

export const useTheme = () => {
    const [loading, storedTheme, setStoredTheme] = useStore(THEME_KEY);

    useEffect(() => {
        const init = async () => {
            const savedTheme = (await store.get(THEME_KEY)) as TTheme | null;
            if (savedTheme) {
                Uniwind.setTheme(savedTheme);
            }
        };

        init();
    }, []);

    const { theme: scheme, hasAdaptiveThemes } = useUniwind();

    const theme: TTheme = hasAdaptiveThemes ? 'system' : scheme;

    const setTheme = async (theme: TTheme) => {
        Uniwind.setTheme(theme);
        await store.set(THEME_KEY, theme);
    };

    return {
        scheme,
        theme,
        setTheme,
    };
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { scheme } = useTheme();

    return <NavigationThemeProvider value={NAV_THEME[scheme || 'light']}>{children}</NavigationThemeProvider>;
};
