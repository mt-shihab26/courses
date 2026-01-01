import { useTheme } from '@/lib/theme';
import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/button';
import { Tabs } from 'expo-router';
import { ChevronLeftIcon, HouseIcon, SettingsIcon } from 'lucide-react-native';
import { Pressable } from 'react-native';

const Layout = () => {
    const { theme } = useTheme();
    const { back } = useRouter();

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
                    headerLeft: () => (
                        <Pressable onPress={() => back()} className="mr-2 ml-4 flex-1 items-center">
                            <Button variant="ghost" size="icon">
                                <ChevronLeftIcon className="pill-primary size-4" />
                            </Button>
                        </Pressable>
                    ),
                }}
            />
        </Tabs>
    );
};

export default Layout;
