import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { ScrollView, View } from 'react-native';

const ForgotPassword = () => {
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
                <Card className="border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5">
                    <CardHeader>
                        <CardTitle className="text-center text-xl sm:text-left">Forgot password?</CardTitle>
                        <CardDescription className="text-center sm:text-left">
                            Enter your email to reset your password
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="gap-6">
                        <View className="gap-6">
                            <View className="gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="m@example.com"
                                    keyboardType="email-address"
                                    autoComplete="email"
                                    autoCapitalize="none"
                                    returnKeyType="send"
                                    onSubmitEditing={handleSubmit}
                                />
                            </View>
                            <Button className="w-full" onPress={handleSubmit}>
                                <Text>Reset your password</Text>
                            </Button>
                        </View>
                    </CardContent>
                </Card>
            </View>
        </ScrollView>
    );
};

export default ForgotPassword;
