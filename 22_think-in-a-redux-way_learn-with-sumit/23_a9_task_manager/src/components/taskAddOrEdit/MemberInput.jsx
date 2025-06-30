import { useEffect } from "react";
import { useGetTeamsQuery } from "../../features/team/teamApi";

const MemberInput = ({ teamMemberId, setTeamMemberId, setTeam }) => {
    const { data: team } = useGetTeamsQuery();

    useEffect(() => {
        if (team && team.length !== 0) {
            setTeam(team);
        }
    }, [team]);

    return (
        <div className="fieldContainer">
            <label>Assign To</label>
            <select
                name="teamMember"
                value={teamMemberId}
                onChange={e => setTeamMemberId(e.target.value)}
                id="lws-teamMember"
                required
            >
                <option value hidden>
                    Select Job
                </option>
                {team?.map(member => (
                    <option key={member.id} value={member.id}>
                        {member.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MemberInput;
