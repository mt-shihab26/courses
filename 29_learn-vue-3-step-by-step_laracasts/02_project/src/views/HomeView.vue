<!-- <script lang="ts"> -->
<!-- import { onMounted, ref } from 'vue' -->
<!---->
<!-- import TheWelcome from '../components/TheWelcome.vue' -->
<!---->
<!-- export default { -->
<!--     components: { -->
<!--         TheWelcome, -->
<!--     }, -->
<!--     setup() { -->
<!--         const message = ref('Hello World') -->
<!---->
<!--         onMounted(() => { -->
<!--             console.log('hi here') -->
<!--         }) -->
<!---->
<!--         setTimeout(() => { -->
<!--             message.value = 'Changed' -->
<!--         }, 2000) -->
<!---->
<!--         return { -->
<!--             message, -->
<!--         } -->
<!--     }, -->
<!-- } -->
<!-- </script> -->

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import TheWelcome from '@/components/TheWelcome.vue'

const message = ref('Hello World')

onMounted(() => {
    console.log('hi here')
})

setTimeout(() => {
    message.value = 'Changed'
}, 2000)
</script>

<template>
    <main>
        <p>{{ message }}</p>
        <input type="text" v-model="message" />
        <TheWelcome />
    </main>
</template>
