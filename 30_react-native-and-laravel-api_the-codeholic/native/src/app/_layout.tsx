import './../../global.css';

import { useUniwind } from 'uniwind';

import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { NAV_THEME } from '@/lib/theme';

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

const Layout = () => {
    const { theme } = useUniwind();

    return (
        <ThemeProvider value={NAV_THEME[theme ?? 'light']}>
            <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
            <Stack />
            <PortalHost />
        </ThemeProvider>
    );
};

export default Layout;
