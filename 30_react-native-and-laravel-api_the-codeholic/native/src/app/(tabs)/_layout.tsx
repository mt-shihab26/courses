import { useTheme } from '@react-navigation/native';

import { BackButton } from '@/components/elements/back-button';
import { HeaderLeft } from '@/components/elements/header-left';
import { HeaderTitle } from '@/components/elements/header-title';
import { Tabs } from 'expo-router';
import { HouseIcon, SettingsIcon } from 'lucide-react-native';

const Layout = () => {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: true,
                headerShadowVisible: true,
                headerLeft: HeaderLeft,
                headerTitle: HeaderTitle,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, color }) => <HouseIcon size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ size, color }) => <SettingsIcon size={size} color={color} />,
                    headerLeft: BackButton,
                }}
            />
        </Tabs>
    );
};

export default Layout;
