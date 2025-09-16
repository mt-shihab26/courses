<script setup lang="ts">
import TeamFooter from '@/components/screens/team/TeamFooter.vue';
import TeamHeader from '@/components/screens/team/TeamHeader.vue';
import TeamMembers from '@/components/screens/team/TeamMembers.vue';

import team from '@/team.json';
</script>

<template>
    <TeamHeader :team="team" />
    <TeamMembers :team="team" />
    <TeamFooter :team="team" />
</template>
