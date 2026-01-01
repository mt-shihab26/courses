import type { ReactNode } from 'react';

import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export const InputWrapper = ({
    label,
    htmlFor,
    required,
    error,
    children,
    labelRight,
}: {
    label: string;
    htmlFor: string;
    required?: boolean;
    error?: string;
    children: ReactNode;
    labelRight?: ReactNode;
}) => {
    return (
        <View className="gap-1.5">
            <View className="flex-row items-center justify-between">
                <Label htmlFor={htmlFor}>
                    {label}
                    {required && <Text className="text-destructive"> *</Text>}
                </Label>
                {labelRight}
            </View>
            {children}
            {error && <Text className="text-destructive text-sm">{error}</Text>}
        </View>
    );
};
