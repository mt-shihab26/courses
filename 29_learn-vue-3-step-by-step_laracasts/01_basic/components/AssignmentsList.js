import AssignmentsItem from './AssignmentsItem.js';

export default {
    components: {
        AssignmentsItem,
    },
    template: `
        <section v-show="assignments.length">
            <h2>{{ title }}</h2>
            <ul>
                <AssignmentsItem
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                />
            </ul>
        </section>
    `,
    props: {
        title: String,
        assignments: Array,
    },
};
