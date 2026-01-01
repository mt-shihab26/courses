import type { TextInput } from 'react-native';

import { useRef } from 'react';

import { CodeInput } from '@/components/inputs/code-input';
import { PasswordInput } from '@/components/inputs/password-input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { AuthWrapper } from '@/components/wrappers/auth-wrapper';

const ResetPassword = () => {
    const codeInputRef = useRef<TextInput>(null);

    const handleSubmit = () => {
        //
    };

    return (
        <AuthWrapper
            title="Reset password"
            description="Enter the code sent to your email and set a new password"
        >
            <PasswordInput
                id="password"
                label="New password"
                required={true}
                value=""
                error=""
                onChange={() => {}}
                onSubmitEditing={() => codeInputRef.current?.focus()}
            />
            <CodeInput
                id="code"
                ref={codeInputRef}
                required={true}
                value=""
                error=""
                onChange={() => {}}
                onSubmitEditing={handleSubmit}
            />
            <Button className="w-full" onPress={handleSubmit}>
                <Text>Reset Password</Text>
            </Button>
        </AuthWrapper>
    );
};

export default ResetPassword;
