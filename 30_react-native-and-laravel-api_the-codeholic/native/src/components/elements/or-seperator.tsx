import type { ReactNode } from 'react';

import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export const ORSeparator = ({ children = 'or' }: { children?: ReactNode }) => {
    return (
        <View className="flex-row items-center">
            <Separator className="flex-1" />
            <Text className="text-muted-foreground px-4 text-sm">{children}</Text>
            <Separator className="flex-1" />
        </View>
    );
};
