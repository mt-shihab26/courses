import type { Href } from 'expo-router';

import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';

export const PromptLink = ({ message, label, href }: { message: string; label: string; href: Href }) => {
    return (
        <Text className="flex-1 items-center text-center text-sm">
            {message}{' '}
            <Link href={href} className="text-sm underline underline-offset-4">
                {label}
            </Link>
        </Text>
    );
};
