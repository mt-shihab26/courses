<script setup lang="ts">
import { ref } from 'vue';

import TabbableTextarea from '@/components/elements/TabbableTextarea.vue';

const message = ref('hello');
</script>

<template>
    <div>
        <form>
            <TabbableTextarea v-model="message" style="width: 100%; height: 300px" />
        </form>
    </div>
</template>
