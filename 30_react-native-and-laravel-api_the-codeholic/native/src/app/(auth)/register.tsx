import type { TextInput } from 'react-native';

import { useRef } from 'react';

import { PromptLink } from '@/components/elements/prompt-link';
import { EmailInput } from '@/components/inputs/email-input';
import { FieldInput } from '@/components/inputs/field-input';
import { PasswordInput } from '@/components/inputs/password-input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { AuthWrapper } from '@/components/wrappers/auth-wrapper';

const Register = () => {
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const handleSubmit = () => {
        //
    };

    return (
        <AuthWrapper title="Create your account" description="Welcome! Please fill in the details to get started.">
            <FieldInput
                id="name"
                label="Name"
                placeholder="John Doe"
                autoComplete="name"
                required={true}
                value=""
                error=""
                onChange={() => {}}
                onSubmitEditing={emailInputRef.current?.focus}
                returnKeyType="next"
            />
            <EmailInput
                id="email"
                ref={emailInputRef}
                required={true}
                value=""
                error=""
                onChange={() => {}}
                onSubmitEditing={passwordInputRef.current?.focus}
            />
            <PasswordInput
                id="password"
                ref={passwordInputRef}
                required={true}
                error=""
                onSubmitEditing={handleSubmit}
            />
            <Button className="w-full" onPress={handleSubmit}>
                <Text>Continue</Text>
            </Button>
            <PromptLink message="Already have an account?" label="Sign in" href="/login" />
        </AuthWrapper>
    );
};

export default Register;
