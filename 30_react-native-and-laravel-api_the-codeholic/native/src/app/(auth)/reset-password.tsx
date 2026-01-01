import type { TextInput } from 'react-native';

import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { ScrollView, View } from 'react-native';

const ResetPassword = () => {
    const codeInputRef = useRef<TextInput>(null);

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
                <Text className="text-center text-xl sm:text-left">Reset password</Text>
                <Text className="text-muted-foreground text-center sm:text-left">
                    Enter the code sent to your email and set a new password
                </Text>
                <View className="gap-6">
                    <View className="gap-1.5">
                        <Label htmlFor="password">New password</Label>
                        <Input
                            id="password"
                            secureTextEntry
                            returnKeyType="next"
                            submitBehavior="submit"
                            onSubmitEditing={() => codeInputRef.current?.focus()}
                        />
                    </View>
                    <View className="gap-1.5">
                        <Label htmlFor="code">Verification code</Label>
                        <Input
                            id="code"
                            autoCapitalize="none"
                            returnKeyType="send"
                            keyboardType="numeric"
                            autoComplete="sms-otp"
                            textContentType="oneTimeCode"
                            onSubmitEditing={handleSubmit}
                        />
                    </View>
                    <Button className="w-full" onPress={handleSubmit}>
                        <Text>Reset Password</Text>
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};

export default ResetPassword;
