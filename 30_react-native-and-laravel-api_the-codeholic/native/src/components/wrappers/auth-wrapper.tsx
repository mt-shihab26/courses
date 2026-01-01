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
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerClassName="p-4">
            <View className="mx-auto flex w-full max-w-md gap-6">
                <View className="gap-2">
                    <Text className="text-center text-xl">{title}</Text>
                    <Text className="text-muted-foreground text-center">{description}</Text>
                </View>
                {children}
            </View>
        </ScrollView>
    );
};
