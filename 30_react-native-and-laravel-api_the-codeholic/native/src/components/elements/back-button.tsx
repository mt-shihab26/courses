import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ChevronLeftIcon } from 'lucide-react-native';
import { View } from 'react-native';

export const BackButton = () => {
    const { back } = useRouter();

    return (
        <View className="pl-2">
            <Button variant="ghost" size="icon" onPress={() => back()}>
                <Icon as={ChevronLeftIcon} className="text-primary size-6" />
            </Button>
        </View>
    );
};
