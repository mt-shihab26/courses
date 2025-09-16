<script setup lang="ts">
import { useTeamStore } from '@/stores/team';

import TeamMemeber from './TeamMemeber.vue';

const team = useTeamStore();
</script>

<template>
    <div class="flex flex-col gap-y-3">
        <table class="table-fixed border-spacing-2 border-separate">
            <thead>
                <tr>
                    <th class="text-left px-6 py-2">Name</th>
                    <th class="text-left px-6 py-2">Email</th>
                    <th class="text-left px-6 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                <TeamMemeber v-for="member in team.members" :key="member.id" :member="member" />
            </tbody>
        </table>
        <p v-show="!team.spotsRemaining" class="text-right text-gray-600 italic">
            There are no remaining team spots. Upgrade to add more.
        </p>
    </div>
</template>
