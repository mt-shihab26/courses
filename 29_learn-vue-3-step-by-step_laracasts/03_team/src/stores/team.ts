import type { TTeam } from '@/types';

import { defineStore } from 'pinia';

export const useTeamStore = defineStore('team', {
    state: (): TTeam => ({
        name: '',
        spots: 0,
        members: [],
    }),
    actions: {
        async fill() {
            const r = await import('@/team.json');
            const data = r.default;
            this.name = data.name;
            this.spots = data.spots;
            this.members = data.members;
        },
    },
});
