import type { ComponentPropsWithoutRef, RefObject } from 'react';
import type { TextInput } from 'react-native';

import { Input } from '@/components/ui/input';
import { InputWrapper } from '@/components/wrappers/input-wrapper';

export const EmailInput = ({
    label = 'Email',
    id,
    required,
    error,
    ref,
    ...props
}: Omit<ComponentPropsWithoutRef<typeof Input>, 'id' | 'name'> & {
    id: string;
    label?: string;
    required?: boolean;
    error?: string;
    ref?: RefObject<TextInput | null>;
}) => {
    return (
        <InputWrapper label={label} htmlFor={id} required={required} error={error}>
            <Input
                ref={ref}
                id={id}
                placeholder="m@example.com"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                returnKeyType="next"
                submitBehavior="submit"
                {...props}
            />
        </InputWrapper>
    );
};
