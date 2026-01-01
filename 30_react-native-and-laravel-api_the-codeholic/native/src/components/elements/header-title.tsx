import type { ReactNode } from 'react';

import { Text, View } from 'react-native';

export const HeaderTitle = ({ children }: { children: ReactNode }) => {
    return (
        <View>
            <Text className="bg-background text-foreground text-xl">{children}</Text>
        </View>
    );
};
