<script setup lang="ts">
import type { TQuiz } from '@/types';

import { provide } from 'vue';

import QuizHeader from './QuizHeader.vue';
import QuizQuestion from './QuizQuestion.vue';
import QuizFooter from './QuizFooter.vue';

const props = defineProps<{ quiz: TQuiz }>();

provide('quiz', props.quiz);
</script>

<template>
    <QuizHeader />
    <QuizQuestion />
    <QuizFooter />
</template>
