import type { TextInput } from 'react-native';

import { useRef } from 'react';

import { ORSeparator } from '@/components/elements/or-seperator';
import { PromptLink } from '@/components/elements/prompt-link';
import { EmailInput } from '@/components/inputs/email-input';
import { PasswordInput } from '@/components/inputs/password-input';
import { SocialConnections } from '@/components/screens/auth/social-connections';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { AuthWrapper } from '@/components/wrappers/auth-wrapper';
import { Link } from 'expo-router';

const Login = () => {
    const passwordInputRef = useRef<TextInput>(null);

    const handleSubmit = () => {
        //
    };

    return (
        <AuthWrapper title="Sign in to your app" description="Welcome back! Please sign in to continue">
            <EmailInput
                id="email"
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
                showForgotPassword
                onSubmitEditing={handleSubmit}
                labelRight={
                    <Link href="/forgot-password">
                        <Text className="text-sm leading-4 font-normal">Forgot your password?</Text>
                    </Link>
                }
            />
            <Button className="w-full" onPress={handleSubmit}>
                <Text>Continue</Text>
            </Button>
            <PromptLink message="Don't have an account?" label="Sign up" href="/register" />
            <ORSeparator />
            <SocialConnections />
        </AuthWrapper>
    );
};

export default Login;
