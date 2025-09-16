<script setup lang="ts">
import TeamMemeber from '@/components/screens/team/TeamMemeber.vue';

import data from '@/data.json';
</script>

<template>
    <header class="flex justify-between">
        <div>
            <button
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                :disabled="true"
            >
                Add Member (0 Spots Left)
            </button>
        </div>
        <div>
            <div class="inline-flex items-center text-3xl relative">
                <span class="text-yellow-500 text-3xl mr-2">😊</span>
                <h3>Smiley Team</h3>
                <div
                    class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
                >
                    5
                </div>
            </div>
        </div>
    </header>

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
        <p class="text-right text-gray-600 italic">
            There are no remaining team spots. Upgrade to add more.
        </p>
    </div>
    <footer class="mt-12 bg-gray-100 py-4 text-center">
        <h5 class="font-semibold text-lg">Smiley - 5 Member Team</h5>
    </footer>
</template>
