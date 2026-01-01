import type { ComponentPropsWithoutRef } from 'react';

import { Input } from '@/components/ui/input';
import { InputWrapper } from '@/components/wrappers/input-wrapper';

export const EmailInput = ({
    label = 'Email',
    id,
    name,
    required,
    error,
    ...props
}: Omit<ComponentPropsWithoutRef<typeof Input>, 'id'> & {
    id: string;
    label?: string;
    name?: string;
    required?: boolean;
    error?: string;
}) => {
    return (
        <InputWrapper label={label} htmlFor={id} required={required} error={error}>
            <Input
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
