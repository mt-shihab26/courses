<script setup lang="ts">
import { useStorage } from '@/composables/use-storage';

const food = useStorage('food', 'salad');
const age = useStorage('age');

setTimeout(() => {
    food.value = 'changed';
}, 2000);
</script>

<template>
    <div>
        <div>
            What is your favorite food?
            <input type="text" v-model="food" />
        </div>
        <div>
            Who old are you?
            <input type="text" v-model="age" />
        </div>
    </div>
</template>
