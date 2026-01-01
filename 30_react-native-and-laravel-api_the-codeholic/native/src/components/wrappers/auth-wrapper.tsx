import type { ReactNode } from 'react';

import { Text } from '@/components/ui/text';
import { ScrollView, View } from 'react-native';

export const AuthWrapper = ({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: ReactNode;
}) => {
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
            keyboardDismissMode="interactive"
        >
            <View className="w-full gap-6">
                <View className="gap-2">
                    <Text className="text-center text-xl sm:text-left">{title}</Text>
                    <Text className="text-muted-foreground text-center sm:text-left">{description}</Text>
                </View>
                {children}
            </View>
        </ScrollView>
    );
};
