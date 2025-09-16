<script setup lang="ts">
import Quiz from '@/components/Quiz/Quiz.vue';
</script>
<template>
    <main>
        <Quiz :quiz="{ name: 'My First Quiz', questions: [] }" />
    </main>
</template>
