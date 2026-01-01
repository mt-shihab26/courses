import { EmailInput } from '@/components/inputs/email-input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { AuthWrapper } from '@/components/wrappers/auth-wrapper';

const ForgotPassword = () => {
    const handleSubmit = () => {
        //
    };

    return (
        <AuthWrapper title="Forgot password?" description="Enter your email to reset your password">
            <EmailInput
                id="email"
                required={true}
                value=""
                error=""
                onChange={() => {}}
                onSubmitEditing={handleSubmit}
            />
            <Button className="w-full" onPress={handleSubmit}>
                <Text>Reset your password</Text>
            </Button>
        </AuthWrapper>
    );
};

export default ForgotPassword;
