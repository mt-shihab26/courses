<script setup lang="ts">
type TMemeber = {
    name: string;
    email: string;
    status: string;
};

defineProps<{
    member: TMemeber;
}>();
</script>

<template>
    <tr class="bg-gray-100 px-12">
        <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
            <img src="https://i.pravatar.cc/50?u=sarah@doe.com" alt="" class="rounded-full" />
            {{ member.name }}
        </td>
        <td class="text-gray-500 px-6 py-4">
            {{ member.name }}
        </td>
        <td class="px-6 py-4">
            <button class="text-green-400 text-xl">
                {{ member.status }}
            </button>
        </td>
    </tr>
</template>
