import { Text } from '@/components/ui/text';
import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

const NotFound = () => {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <View>
                <Text>This screen does not exist.</Text>
                <Link href="/">
                    <Text>Go to home screen!</Text>
                </Link>
            </View>
        </>
    );
};

export default NotFound;
