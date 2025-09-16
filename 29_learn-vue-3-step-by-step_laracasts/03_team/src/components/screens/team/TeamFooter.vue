<script setup lang="ts">
import type { TTeam } from '@/types';

defineProps<{ team: TTeam }>();
</script>

<template>
    <footer class="mt-12 bg-gray-100 py-4 text-center">
        <h5 class="font-semibold text-lg">Smiley - {{ team.members.length }} Member Team</h5>
    </footer>
</template>
