import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

const Index = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Button variant="destructive">
                <Text>Button</Text>
            </Button>
        </View>
    );
};

export default Index;
