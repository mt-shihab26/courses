import './../../global.css';

import { useUniwind } from 'uniwind';

import { ThemeProvider } from '@/providers/theme';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

const Layout = () => {
    const { theme } = useUniwind();

    return (
        <ThemeProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
            <PortalHost />
        </ThemeProvider>
    );
};

export default Layout;
