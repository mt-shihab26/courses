import { useRouter } from 'expo-router';

import { ChevronLeftIcon, View } from 'lucide-react-native';
import { Pressable } from 'react-native';
import { Button } from '../ui/button';

export const BackPressable = () => {
    const { back } = useRouter();

    return (
        <View className="px-4">
            <Pressable onPress={() => back()} className="flex-1 items-center">
                <Button>
                    <ChevronLeftIcon className="text-primary size-4" />
                </Button>
            </Pressable>
        </View>
    );
};
