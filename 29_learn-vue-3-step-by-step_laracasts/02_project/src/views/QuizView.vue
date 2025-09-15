<script setup lang="ts">
import Quiz from '@/components/Quiz/QuiZ.vue';
</script>
<template>
    <main>
        <Quiz :quiz="{ name: 'My First Quiz', questions: [] }" />
    </main>
</template>
