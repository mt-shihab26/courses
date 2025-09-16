<script setup lang="ts">
import { quizStore } from '@/states/quiz-store';
</script>

<template>
    <div>
        <h5>{{ quizStore.name }}</h5>
        <button @click="quizStore.name = 'A New Quiz Name'">Change Quiz Name</button>
        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>
