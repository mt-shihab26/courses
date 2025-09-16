<script setup lang="ts">
import { useTeamStore } from '@/stores/team';

import TeamFooter from '@/components/screens/team/TeamFooter.vue';
import TeamHeader from '@/components/screens/team/TeamHeader.vue';
import TeamMembers from '@/components/screens/team/TeamMembers.vue';

const team = useTeamStore();

team.fill();
</script>

<template>
    <TeamHeader />
    <TeamMembers />
    <TeamFooter />
</template>
