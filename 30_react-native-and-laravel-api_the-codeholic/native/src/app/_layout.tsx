import './../../global.css';

import { useUniwind } from 'uniwind';

import { HeaderLeft } from '@/components/elements/header-left';
import { HeaderTitle } from '@/components/elements/header-title';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';

import { NAV_THEME } from '@/lib/theme';

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

const Layout = () => {
    const { theme } = useUniwind();

    return (
        <ThemeProvider value={NAV_THEME[theme ?? 'light']}>
            <Stack
                screenOptions={{
                    headerShown: true,
                    headerShadowVisible: true,
                    headerLeft: HeaderLeft,
                    headerTitle: HeaderTitle,
                }}
            >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
            <PortalHost />
        </ThemeProvider>
    );
};

export default Layout;
