import { SocialConnections } from '@/components/screens/auth/social-connections';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { useRef } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';

const Login = () => {
    const passwordInputRef = useRef<TextInput>(null);

    function onEmailSubmitEditing() {
        passwordInputRef.current?.focus();
    }

    function onSubmit() {
        // TODO: Submit form and navigate to protected screen if successful
    }

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
            keyboardDismissMode="interactive"
        >
            <View className="w-full gap-6">
                <Text className="text-center text-xl sm:text-left">Sign in to your app</Text>
                <Text className="text-center sm:text-left text-muted-foreground">
                    Welcome back! Please sign in to continue
                </Text>
                <View className="gap-6">
                    <View className="gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="m@example.com"
                            keyboardType="email-address"
                            autoComplete="email"
                            autoCapitalize="none"
                            onSubmitEditing={onEmailSubmitEditing}
                            returnKeyType="next"
                            submitBehavior="submit"
                        />
                    </View>
                    <View className="gap-1.5">
                        <View className="flex-row items-center">
                            <Label htmlFor="password">Password</Label>
                            <Button
                                variant="link"
                                size="sm"
                                className="web:h-fit ml-auto h-4 px-1 py-0 sm:h-4"
                                onPress={() => {
                                    // TODO: Navigate to forgot password screen
                                }}
                            >
                                <Text className="leading-4 font-normal">Forgot your password?</Text>
                            </Button>
                        </View>
                        <Input
                            ref={passwordInputRef}
                            id="password"
                            secureTextEntry
                            returnKeyType="send"
                            onSubmitEditing={onSubmit}
                        />
                    </View>
                    <Button className="w-full" onPress={onSubmit}>
                        <Text>Continue</Text>
                    </Button>
                </View>
                <Text className="text-center text-sm">
                    Don&apos;t have an account?{' '}
                    <Pressable
                        onPress={() => {
                            // TODO: Navigate to sign up screen
                        }}
                    >
                        <Text className="text-sm underline underline-offset-4">Sign up</Text>
                    </Pressable>
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
