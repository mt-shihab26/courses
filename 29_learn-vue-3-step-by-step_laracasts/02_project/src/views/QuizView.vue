<script setup lang="ts">
import { state } from '@/states/quiz-store';
import Quiz from '@/components/quiz/Quiz.vue';
</script>
<template>
    <main>
        <Quiz :quiz="state" />
    </main>
</template>
