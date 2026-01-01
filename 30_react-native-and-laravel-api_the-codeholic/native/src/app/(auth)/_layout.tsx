import { HeaderLeft } from '@/components/elements/header-left';
import { HeaderTitle } from '@/components/elements/header-title';
import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: true,
                headerLeft: HeaderLeft,
                headerTitle: HeaderTitle,
            }}
        >
            <Stack.Screen name="login" options={{ title: 'Sign In' }} />
            <Stack.Screen name="register" options={{ title: 'Sign Up' }} />
            <Stack.Screen name="forgot-password" options={{ title: 'Forgot Password' }} />
            <Stack.Screen name="reset-password" options={{ title: 'Reset Password' }} />
            <Stack.Screen name="verify-email" options={{ title: 'Verify Email' }} />
        </Stack>
    );
};

export default Layout;
