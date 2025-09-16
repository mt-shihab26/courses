<script setup lang="ts">
import { useCounterStore } from '@/states/counter-store';

const counter = useCounterStore();
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>
        <button @click="counter.setCount(counter.count + 1)">Increment</button>
    </div>
</template>
