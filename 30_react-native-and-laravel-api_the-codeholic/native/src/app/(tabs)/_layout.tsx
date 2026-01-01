import { useTheme } from '@react-navigation/native';

import { BackPressable } from '@/components/elements/back-pressable';
import { Tabs } from 'expo-router';
import { HouseIcon, SettingsIcon } from 'lucide-react-native';

const Layout = () => {
    const { colors } = useTheme();

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
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
                    headerLeft: BackPressable,
                }}
            />
        </Tabs>
    );
};

export default Layout;
