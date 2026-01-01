import './../../global.css';

import { useRouter } from 'expo-router';
import { useUniwind } from 'uniwind';

import { Icon } from '@/components/ui/icon';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { NAV_THEME } from '@/lib/theme';

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

const Layout = () => {
    const { theme } = useUniwind();
    const { back } = useRouter();

    return (
        <ThemeProvider value={NAV_THEME[theme ?? 'light']}>
            <Stack
                screenOptions={{
                    headerShown: true,
                    headerShadowVisible: true,
                    headerLeft: () => (
                        <Pressable onPress={() => back()} className="-ml-2 p-2">
                            <Icon as={ArrowLeft} className="text-foreground size-6" />
                        </Pressable>
                    ),
                    headerTitle: ({ children }) => (
                        <View className="bg-primary h-8 w-8 items-center justify-center rounded-full">
                            <View className="bg-primary-foreground h-4 w-4 rounded-full" />
                            <Text>{children}</Text>
                        </View>
                    ),
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
