export type TTeamMemeber = {
    name: string;
    email: string;
    status: string;
};

export type TTeam = {
    name: string;
    spots: number;
    members: TTeamMemeber[];
};
