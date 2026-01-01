import type { ComponentPropsWithoutRef, ReactNode, RefObject } from 'react';
import type { TextInput } from 'react-native';

import { InputWrapper } from '@/components/elements/input-wrapper';
import { Input } from '@/components/ui/input';

export const PasswordInput = ({
    label = 'Password',
    required,
    showForgotPassword = false,
    error,
    ref,
    labelRight,
    ...props
}: Omit<ComponentPropsWithoutRef<typeof Input>, 'id'> & {
    label?: string;
    required?: boolean;
    showForgotPassword?: boolean;
    error?: string;
    ref?: RefObject<TextInput | null>;
    labelRight?: ReactNode;
}) => {
    return (
        <InputWrapper label={label} htmlFor="password" required={required} error={error} labelRight={labelRight}>
            <Input ref={ref} id="password" secureTextEntry returnKeyType="send" {...props} />
        </InputWrapper>
    );
};
