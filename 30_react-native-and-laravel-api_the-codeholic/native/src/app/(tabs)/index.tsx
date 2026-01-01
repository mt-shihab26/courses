import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const Index = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Link className="text-foreground" href="/login">
                Login
            </Link>
            <Text className="text-foreground">Tab Home 2</Text>
        </View>
    );
};

export default Index;
