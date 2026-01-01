import { useTheme } from '@/lib/theme';

import { Tabs } from 'expo-router';
import { HouseIcon, SettingsIcon } from 'lucide-react-native';

const Layout = () => {
    const { theme } = useTheme();

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: theme.primary }}>
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
                }}
            />
        </Tabs>
    );
};

export default Layout;
