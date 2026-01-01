import { useCountdown } from '@/hooks/use-countdown';

import { CodeInput } from '@/components/inputs/code-input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { AuthWrapper } from '@/components/wrappers/auth-wrapper';
import { Link } from 'expo-router';
import { View } from 'react-native';

const VerifyEmail = () => {
    const { countdown, restartCountdown } = useCountdown(30);

    const handleSubmit = () => {
        //
    };

    const handleReset = () => {
        restartCountdown();
    };

    return (
        <AuthWrapper title="Verify your email" description="Enter the verification code sent to m@example.com">
            <View className="gap-6">
                <CodeInput
                    id="code"
                    required={true}
                    value=""
                    error=""
                    onChange={() => {}}
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
                <View className="gap-2">
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
        </AuthWrapper>
    );
};

export default VerifyEmail;
