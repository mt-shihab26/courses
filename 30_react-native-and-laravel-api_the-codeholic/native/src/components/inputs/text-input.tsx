import type { ComponentPropsWithoutRef } from 'react';

import { Input } from '@/components/ui/input';
import { InputWrapper } from '@/components/wrappers/input-wrapper';

export const TextInput = ({
    label,
    id,
    name,
    required,
    error,
    ...props
}: Omit<ComponentPropsWithoutRef<typeof Input>, 'id' | 'name'> & {
    id: string;
    label: string;
    name?: string;
    required?: boolean;
    error?: string;
}) => {
    return (
        <InputWrapper label={label} htmlFor={id} required={required} error={error}>
            <Input id={id} {...props} />
        </InputWrapper>
    );
};
