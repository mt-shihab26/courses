export default {
    template: `
        <label>
            {{ assignment.label }}
            <input type="checkbox" v-model="assignment.complete" />
        </label>
    `,
    props: {
        assignment: Object,
    },
};
