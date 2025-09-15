<script setup lang="ts">
import type { TQuiz } from '@/types';

import QuizHeader from '@/components/Quiz/QuizHeader.vue';
import QuizQuestion from '@/components/Quiz/QuizQuestion.vue';
import QuizFooter from '@/components/Quiz/QuizFooter.vue';

defineProps<{ quiz: TQuiz }>();
</script>

<template>
    <h1>{{ quiz.name }}</h1>
    <QuizHeader />
    <QuizQuestion />
    <QuizFooter :quiz="quiz" />
</template>
