import type { TextStyle } from 'react-native';

import { useCountdown } from '@/hooks/use-countdown';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { ScrollView, View } from 'react-native';

const TABULAR_NUMBERS_STYLE: TextStyle = { fontVariant: ['tabular-nums'] };

const VerifyEmail = () => {
    const { countdown, restartCountdown } = useCountdown(30);

    const handleSubmit = () => {
        //
    };

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
            keyboardDismissMode="interactive"
        >
            <View className="w-full max-w-sm gap-6">
                <Card className="border-border/0 sm:border-border pb-4 shadow-none sm:shadow-sm sm:shadow-black/5">
                    <CardHeader>
                        <CardTitle className="text-center text-xl sm:text-left">Verify your email</CardTitle>
                        <CardDescription className="text-center sm:text-left">
                            Enter the verification code sent to m@example.com
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="gap-6">
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
                                <Button
                                    variant="link"
                                    size="sm"
                                    disabled={countdown > 0}
                                    onPress={() => {
                                        // TODO: Resend code
                                        restartCountdown();
                                    }}
                                >
                                    <Text className="text-center text-xs">
                                        Didn&apos;t receive the code? Resend{' '}
                                        {countdown > 0 ? (
                                            <Text className="text-xs" style={TABULAR_NUMBERS_STYLE}>
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
                                <Button
                                    variant="link"
                                    className="mx-auto"
                                    onPress={() => {
                                        // TODO: Navigate to sign up screen
                                    }}
                                >
                                    <Text>Cancel</Text>
                                </Button>
                            </View>
                        </View>
                    </CardContent>
                </Card>
            </View>
        </ScrollView>
    );
};

export default VerifyEmail;
