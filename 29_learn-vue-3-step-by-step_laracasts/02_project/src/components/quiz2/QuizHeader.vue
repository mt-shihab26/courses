<script setup lang="ts">
import { quizStore } from '@/states/quiz-store';
</script>

<template>
    <header>
        <h1>{{ quizStore.name }}</h1>
        <p>Welcome to your first quiz. How do you think you'll do?</p>
    </header>
</template>
