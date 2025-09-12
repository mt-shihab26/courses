import AssignmentsItem from './AssignmentsItem.js';

export default {
    components: {
        AssignmentsItem,
    },
    template: `
        <section v-show="assignments.length">
            <h2>{{ title }}</h2>
            <ul>
                <li v-for="assignment in assignments" :key="assignment.id">
                    <AssignmentsItem :assignment="assignment" />
                </li>
            </ul>
        </section>
    `,
    props: {
        title: String,
        assignments: Array,
    },
};
