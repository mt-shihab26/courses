import { useRef } from 'react';

import { EmailInput } from '@/components/inputs/email-input';
import { PasswordInput } from '@/components/inputs/password-input';
import { SocialConnections } from '@/components/screens/auth/social-connections';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
                <Text className="text-center text-xl sm:text-left">Sign in to your app</Text>
                <Text className="text-muted-foreground text-center sm:text-left">
                    Welcome back! Please sign in to continue
                </Text>
                <View className="gap-6">
                    <EmailInput onSubmitEditing={() => passwordInputRef.current?.focus()} />
                    <PasswordInput ref={passwordInputRef} showForgotPassword onSubmitEditing={handleSubmit} />
                    <Button className="w-full" onPress={handleSubmit}>
                        <Text>Continue</Text>
                    </Button>
                </View>
                <Text className="flex-1 items-center text-center text-sm">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="text-sm underline underline-offset-4">
                        Sign up
                    </Link>
                </Text>
                <View className="flex-row items-center">
                    <Separator className="flex-1" />
                    <Text className="text-muted-foreground px-4 text-sm">or</Text>
                    <Separator className="flex-1" />
                </View>
                <SocialConnections />
            </View>
        </ScrollView>
    );
};

export default Login;
