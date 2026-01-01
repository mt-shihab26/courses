import { useRef } from 'react';

import { ORSeparator } from '@/components/elements/or-seperator';
import { PromptLink } from '@/components/elements/prompt-link';
import { EmailInput } from '@/components/inputs/email-input';
import { PasswordInput } from '@/components/inputs/password-input';
import { SocialConnections } from '@/components/screens/auth/social-connections';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { ScrollView, TextInput, View } from 'react-native';

const Login = () => {
    const passwordInputRef = useRef<TextInput>(null);

    const handleSubmit = () => {
        //
    };

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
            keyboardDismissMode="interactive"
        >
            <View className="w-full gap-6">
                <View className="gap-2">
                    <Text className="text-center text-xl sm:text-left">Sign in to your app</Text>
                    <Text className="text-muted-foreground text-center sm:text-left">
                        Welcome back! Please sign in to continue
                    </Text>
                </View>
                <EmailInput
                    required={true}
                    value=""
                    error=""
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                />
                <PasswordInput
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
            </View>
        </ScrollView>
    );
};

export default Login;
