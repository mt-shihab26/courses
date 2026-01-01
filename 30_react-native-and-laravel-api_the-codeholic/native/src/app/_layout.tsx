import './../../global.css';

import { useUniwind } from 'uniwind';

import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';

import { HeaderTitle } from '@/components/elements/header-title';
import { NAV_THEME } from '@/lib/theme';

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

const Layout = () => {
    const { theme } = useUniwind();

    return (
        <ThemeProvider value={NAV_THEME[theme ?? 'light']}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: true, headerTitle: HeaderTitle }} />
                <Stack.Screen name="(auth)" options={{ headerShown: true, headerTitle: HeaderTitle }} />
            </Stack>
            <PortalHost />
        </ThemeProvider>
    );
};

export default Layout;
