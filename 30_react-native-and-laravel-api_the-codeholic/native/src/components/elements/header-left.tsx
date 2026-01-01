import { useRouter } from 'expo-router';

import { Icon } from '@/components/ui/icon';
import { ArrowLeft } from 'lucide-react-native';
import { Pressable } from 'react-native';

export const HeaderLeft = () => {
    const { back } = useRouter();

    return (
        <Pressable onPress={() => back()} className="-ml-2 p-2">
            <Icon as={ArrowLeft} className="text-foreground size-6" />
        </Pressable>
    );
};
