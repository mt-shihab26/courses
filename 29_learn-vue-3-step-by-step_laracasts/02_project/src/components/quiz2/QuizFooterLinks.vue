<script setup lang="ts">
import { state } from '@/states/quiz-store';
</script>

<template>
    <div>
        <h5>{{ state.name }}</h5>
        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>
