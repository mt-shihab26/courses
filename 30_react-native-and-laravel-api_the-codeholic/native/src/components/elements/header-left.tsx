import { useRouter } from 'expo-router';

import { Icon } from '@/components/ui/icon';
import { ArrowLeft } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

export const HeaderLeft = () => {
    const router = useRouter();

    if (!router.canGoBack()) {
        return null;
    }

    return (
        <View className="">
            <Pressable onPress={() => router.back()} className="p-2">
                <Icon as={ArrowLeft} className="text-foreground size-6" />
            </Pressable>
        </View>
    );
};
