export default {
    template: `
        <li>
            <label>
                {{ assignment.label }}
                <input type="checkbox" v-model="assignment.complete" />
            </label>
        </li>
    `,
    props: {
        assignment: Object,
    },
};
