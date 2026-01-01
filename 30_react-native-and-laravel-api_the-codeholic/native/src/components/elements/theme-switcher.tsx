import { cn } from '@/lib/utils';
import { useUniwind } from 'uniwind';

import { Pressable, Text, View } from 'react-native';
import { Uniwind } from 'uniwind';

type TTheme = 'light' | 'dark' | 'system';

const themes: { name: TTheme; label: string; icon: string }[] = [
    { name: 'light', label: 'Light', icon: '☀️' },
    { name: 'dark', label: 'Dark', icon: '🌙' },
    { name: 'system', label: 'System', icon: '⚙️' },
];

export const ThemeSwitcher = () => {
    const { theme, hasAdaptiveThemes } = useUniwind();

    const activeTheme = hasAdaptiveThemes ? 'system' : theme;

    return (
        <View className="flex-row gap-2">
            {themes.map((t) => (
                <Pressable
                    key={t.name}
                    onPress={() => Uniwind.setTheme(t.name)}
                    className={cn('items-center rounded-lg px-4 py-3', {
                        'bg-primary': activeTheme === t.name,
                    })}
                >
                    <Text className="mb-1 text-2xl">{t.icon}</Text>
                    <Text
                        className={cn('text-xs', {
                            'text-white': activeTheme === t.name,
                        })}
                    >
                        {t.label}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};
