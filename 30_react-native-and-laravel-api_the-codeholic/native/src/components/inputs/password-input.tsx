import type { ComponentPropsWithoutRef, ReactNode, RefObject } from 'react';
import type { TextInput } from 'react-native';

import { useState } from 'react';

import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { InputWrapper } from '@/components/wrappers/input-wrapper';
import { Eye, EyeOff } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

export const PasswordInput = ({
    label = 'Password',
    id,
    required,
    error,
    ref,
    labelRight,
    ...props
}: Omit<ComponentPropsWithoutRef<typeof Input>, 'id' | 'name'> & {
    id: string;
    label?: string;
    required?: boolean;
    error?: string;
    ref?: RefObject<TextInput | null>;
    labelRight?: ReactNode;
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <InputWrapper label={label} htmlFor={id} required={required} error={error} labelRight={labelRight}>
            <View className="relative">
                <Input
                    ref={ref}
                    id={id}
                    secureTextEntry={!isPasswordVisible}
                    returnKeyType="send"
                    className="pr-12"
                    placeholder="********"
                    {...props}
                />
                <Pressable
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute top-0 right-3 bottom-0 justify-center"
                >
                    <Icon as={isPasswordVisible ? EyeOff : Eye} className="text-muted-foreground size-5" />
                </Pressable>
            </View>
        </InputWrapper>
    );
};
