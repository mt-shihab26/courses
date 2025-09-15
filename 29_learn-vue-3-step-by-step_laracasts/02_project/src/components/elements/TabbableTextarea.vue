<script setup lang="ts">
defineProps<{
    modelValue: string;
}>();

defineEmits(['update:modelValue']);

const keydown = (e: KeyboardEvent) => {
    const element = e.target as HTMLTextAreaElement;
    if (!element) return;

    switch (e.key) {
        case 'Tab':
            e.preventDefault();

            const start = element.selectionStart;
            const end = element.selectionEnd;

            element.value = element.value.substring(0, start) + '\t' + element.value.substring(end);

            element.selectionStart = element.selectionEnd = start + 1;
    }
};

const update = (e: KeyboardEvent) => {};
</script>

<template>
    <textarea v-text="modelValue" @keydown="keydown" @keyup="update" />
</template>
