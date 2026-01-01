import type { ComponentPropsWithoutRef } from 'react';

import { Input } from '@/components/ui/input';
import { InputWrapper } from '@/components/wrappers/input-wrapper';

export const EmailInput = ({
    label = 'Email',
    required,
    error,
    ...props
}: Omit<ComponentPropsWithoutRef<typeof Input>, 'id'> & {
    label?: string;
    required?: boolean;
    error?: string;
}) => {
    return (
        <InputWrapper label={label} htmlFor="email" required={required} error={error}>
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
        </InputWrapper>
    );
};
