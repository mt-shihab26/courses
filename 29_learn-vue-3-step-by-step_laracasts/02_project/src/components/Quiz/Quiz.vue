<script setup lang="ts">
import type { TQuiz } from '@/types';

import { provide } from 'vue';

import QuizHeader from '@/components/Quiz/QuizHeader.vue';
import QuizQuestion from '@/components/Quiz/QuizQuestion.vue';
import QuizFooter from '@/components/Quiz/QuizFooter.vue';

const props = defineProps<{ quiz: TQuiz }>();

provide('quiz', props.quiz);
</script>

<template>
    <QuizHeader />
    <QuizQuestion />
    <QuizFooter />
</template>
