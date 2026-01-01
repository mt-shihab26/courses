import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { View } from 'react-native';

const Index = () => {
    return (
        <View className="flex-1 items-center justify-center gap-2">
            <Link className="text-foreground" href="/login" asChild>
                <Button>
                    <Text>Login</Text>
                </Button>
            </Link>
            <Link className="text-foreground" href="/verify-email" asChild>
                <Button>
                    <Text>Verify Email</Text>
                </Button>
            </Link>
        </View>
    );
};

export default Index;
