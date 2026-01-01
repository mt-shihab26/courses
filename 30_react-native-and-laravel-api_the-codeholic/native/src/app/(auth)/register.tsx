import { useRef } from 'react';

import { SocialConnections } from '@/components/screens/auth/social-connections';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { ScrollView, TextInput, View } from 'react-native';

const Register = () => {
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
                <Text className="text-center text-xl sm:text-left">Create your account</Text>
                <Text className="text-muted-foreground text-center sm:text-left">
                    Welcome! Please fill in the details to get started.
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
                            onSubmitEditing={passwordInputRef.current?.focus}
                            returnKeyType="next"
                            submitBehavior="submit"
                        />
                    </View>
                    <View className="gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            ref={passwordInputRef}
                            id="password"
                            secureTextEntry
                            returnKeyType="send"
                            onSubmitEditing={handleSubmit}
                        />
                    </View>
                    <Button className="w-full" onPress={handleSubmit}>
                        <Text>Continue</Text>
                    </Button>
                </View>
                <Text className="flex-1 items-center text-center text-sm">
                    Already have an account?{' '}
                    <Link href="/login" className="text-sm underline underline-offset-4">
                        Sign in
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

export default Register;
