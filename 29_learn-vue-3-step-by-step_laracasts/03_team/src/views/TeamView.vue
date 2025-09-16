<script setup lang="ts">
import TeamHeader from '@/components/screens/team/TeamHeader.vue';
import TeamMemeber from '@/components/screens/team/TeamMemeber.vue';

import data from '@/data.json';
</script>

<template>
    <TeamHeader :team="data" />

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
                <TeamMemeber v-for="member in data.members" :key="member.id" :member="member" />
            </tbody>
        </table>
        <p v-show="data.spots === data.members.length" class="text-right text-gray-600 italic">
            There are no remaining team spots. Upgrade to add more.
        </p>
    </div>
    <footer class="mt-12 bg-gray-100 py-4 text-center">
        <h5 class="font-semibold text-lg">Smiley - 5 Member Team</h5>
    </footer>
</template>
