<script setup lang="ts">
import { counter } from '@/states/counter-store';
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>
        <button @click="counter.increment">Increment</button>
    </div>
</template>
