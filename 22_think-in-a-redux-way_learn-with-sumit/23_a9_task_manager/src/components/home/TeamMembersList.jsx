import { useGetTeamsQuery } from "../../features/team/teamApi";

const TeamMembersList = () => {
    const { data: team, isLoading, isError, error } = useGetTeamsQuery();
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold">Team Members</h3>
            <div className="mt-3 space-y-4">
                {isLoading ? (
                    <h4>Loading</h4>
                ) : isError ? (
                    <>{error.error}</>
                ) : !team || team.length === 0 ? (
                    <>There is no team members</>
                ) : (
                    team.map(member => (
                        <div key={member.id} className="checkbox-container">
                            <img src={member.avatar} className="team-avater" />
                            <p className="label">{member.name}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TeamMembersList;
