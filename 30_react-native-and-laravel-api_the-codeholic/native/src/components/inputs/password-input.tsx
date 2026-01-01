import type { ComponentPropsWithoutRef } from 'react';
import type { TextInput } from 'react-native';

import { forwardRef } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { View } from 'react-native';

interface PasswordInputProps extends Omit<ComponentPropsWithoutRef<typeof Input>, 'id'> {
    label?: string;
    showForgotPassword?: boolean;
    error?: string;
}

export const PasswordInput = forwardRef<TextInput, PasswordInputProps>(
    ({ label = 'Password', showForgotPassword = false, error, ...props }, ref) => {
        return (
            <View className="gap-1.5">
                <View className="flex-row items-center justify-between">
                    <Label htmlFor="password">{label}</Label>
                    {showForgotPassword && (
                        <Link href="/forgot-password">
                            <Text className="text-sm leading-4 font-normal">Forgot your password?</Text>
                        </Link>
                    )}
                </View>
                <Input ref={ref} id="password" secureTextEntry returnKeyType="send" {...props} />
                {error && <Text className="text-destructive text-sm">{error}</Text>}
            </View>
        );
    },
);

PasswordInput.displayName = 'PasswordInput';
