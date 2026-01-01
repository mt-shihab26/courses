import type { ReactNode } from 'react';

import { Text, View } from 'react-native';

export const HeaderTitle = ({ children }: { children: ReactNode }) => {
    return (
        <View className="flex-row items-center gap-2">
            <Text className="text-foreground text-xl font-semibold">{children}</Text>
        </View>
    );
};
