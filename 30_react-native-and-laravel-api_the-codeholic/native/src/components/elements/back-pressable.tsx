import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react-native';
import { View } from 'react-native';

export const BackPressable = () => {
    const { back } = useRouter();
    const { colors } = useTheme();

    return (
        <View className="pl-4">
            <Button variant="ghost" size="icon" onPress={() => back()}>
                <ChevronLeftIcon size={24} color={colors.primary} />
            </Button>
        </View>
    );
};
