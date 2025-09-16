import type { TQuiz } from '@/types';

import { reactive } from 'vue';

export const quizStore = reactive<TQuiz>({
    name: 'My Second Quiz',
    questions: [],
});
