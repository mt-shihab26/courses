<script setup lang="ts">
defineProps({ quiz: Object });
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
