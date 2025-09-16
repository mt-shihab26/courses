<script setup lang="ts">
import type { TQuiz } from '@/types';

import { inject } from 'vue';

const quiz = inject('quiz') as TQuiz;
</script>

<template>
    <div>
        <h5>{{ quiz.name }}</h5>
        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>
