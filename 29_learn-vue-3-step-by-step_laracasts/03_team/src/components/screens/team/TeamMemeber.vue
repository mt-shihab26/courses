<script setup lang="ts">
import type { TTeamMemeber } from '@/types';

defineProps<{
    member: TTeamMemeber;
}>();
</script>

<template>
    <tr class="bg-gray-100 px-12">
        <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
            <img :src="`https://i.pravatar.cc/50?u=${member.email}`" alt="" class="rounded-full" />
            {{ member.name }}
        </td>
        <td class="text-gray-500 px-6 py-4">
            {{ member.email }}
        </td>
        <td class="px-6 py-4">
            <button class="text-green-400 text-xl">
                {{ member.status }}
            </button>
        </td>
    </tr>
</template>
