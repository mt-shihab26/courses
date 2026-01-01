import type { ComponentPropsWithoutRef } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

interface EmailInputProps extends Omit<ComponentPropsWithoutRef<typeof Input>, 'id'> {
    label?: string;
    error?: string;
}

export const EmailInput = ({ label = 'Email', error, ...props }: EmailInputProps) => {
    return (
        <View className="gap-1.5">
            <Label htmlFor="email">{label}</Label>
            <Input
                id="email"
                placeholder="m@example.com"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                returnKeyType="next"
                submitBehavior="submit"
                {...props}
            />
            {error && <Text className="text-destructive text-sm">{error}</Text>}
        </View>
    );
};
