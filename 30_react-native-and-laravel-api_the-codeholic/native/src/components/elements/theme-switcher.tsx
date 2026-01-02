import type { TTheme } from '@/types/utils';

import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/theme';

import { Pressable, Text, View } from 'react-native';

const themes: { name: TTheme; label: string; icon: string }[] = [
    { name: 'light', label: 'Light', icon: '☀️' },
    { name: 'dark', label: 'Dark', icon: '🌙' },
    { name: 'system', label: 'System', icon: '⚙️' },
];

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <View className="flex-row gap-2">
            {themes.map((t) => (
                <Pressable
                    key={t.name}
                    onPress={async () => setTheme(t.name)}
                    className={cn(
                        'border-border bg-card rounded-lg border p-1',
                        'items-center rounded-md px-4 py-3',
                        'transition-colors duration-200',
                        {
                            'bg-primary shadow-sm': theme === t.name,
                            'active:bg-muted bg-transparent': theme !== t.name,
                        },
                    )}
                >
                    <Text className="mb-1 text-2xl">{t.icon}</Text>
                    <Text
                        className={cn('text-muted-foreground text-xs font-medium', {
                            'text-primary-foreground': theme === t.name,
                        })}
                    >
                        {t.label}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};
