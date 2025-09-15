<script setup lang="ts">
import { onMounted, ref } from 'vue'

const textarea = ref<HTMLTextAreaElement | null>(null)

onMounted(() => {
    const element = textarea.value

    element?.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault()

            const start = element.selectionStart
            const end = element.selectionEnd

            element.value = element.value.substring(0, start) + '\t' + element.value.substring(end)

            element.selectionStart = element.selectionEnd = start + 1
        }
    })
})
</script>

<template>
    <div>
        <form>
            <textarea ref="textarea" style="width: 100%; height: 300px">Hi There</textarea>
        </form>
    </div>
</template>
