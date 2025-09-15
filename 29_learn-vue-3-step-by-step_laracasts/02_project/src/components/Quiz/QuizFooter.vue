<script setup lang="ts">
import QuizFooterLinks from '@/components/Quiz/QuizFooterLinks.vue';
defineProps({
    quiz: Object,
});
</script>

<template>
    <footer>
        <h4>Quiz Footer</h4>
        <QuizFooterLinks :quiz="quiz" />
    </footer>
</template>
