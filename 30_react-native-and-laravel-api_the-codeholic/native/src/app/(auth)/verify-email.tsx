import { useCountdown } from '@/hooks/use-countdown';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { ScrollView, View } from 'react-native';

const VerifyEmail = () => {
    const { countdown, restartCountdown } = useCountdown(30);

    const handleSubmit = () => {
        //
    };

    const handleReset = () => {
        restartCountdown();
    };

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
            keyboardDismissMode="interactive"
        >
            <View className="w-full gap-6">
                <Text className="text-center text-xl sm:text-left">Verify your email</Text>
                <View>
                    <Text className="text-muted-foreground text-center sm:text-left">
                        Enter the verification code sent to
                    </Text>
                    <Text className="text-muted-foreground text-center sm:text-left">m@example.com</Text>
                </View>
                <View className="gap-6">
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
                        <Button variant="link" size="sm" disabled={countdown > 0} onPress={handleReset}>
                            <Text className="text-center text-xs">
                                Didn&apos;t receive the code? Resend{' '}
                                {countdown > 0 ? (
                                    <Text className="text-xs" style={{ fontVariant: ['tabular-nums'] }}>
                                        ({countdown})
                                    </Text>
                                ) : null}
                            </Text>
                        </Button>
                    </View>
                    <View className="gap-3">
                        <Button className="w-full" onPress={handleSubmit}>
                            <Text>Continue</Text>
                        </Button>
                        <Link href="/" asChild>
                            <Button variant="link" className="mx-auto">
                                <Text>Cancel</Text>
                            </Button>
                        </Link>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default VerifyEmail;
