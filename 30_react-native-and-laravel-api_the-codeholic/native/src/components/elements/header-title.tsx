import type { ReactNode } from 'react';

import { Text, View } from 'react-native';

export const HeaderTitle = ({ children }: { children: ReactNode }) => {
    return (
        <View className="flex-row items-center gap-2">
            <View className="bg-primary h-8 w-8 items-center justify-center rounded-full">
                <View className="bg-primary-foreground h-4 w-4 rounded-full" />
            </View>
            <Text className="text-foreground text-xl font-semibold">{children}</Text>
        </View>
    );
};
