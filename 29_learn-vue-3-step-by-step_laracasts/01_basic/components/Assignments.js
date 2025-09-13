import AssignmentCreate from './AssignmentCreate.js';
import AssignmentsList from './AssignmentsList.js';

export default {
    components: {
        AssignmentsList,
        AssignmentCreate,
    },
    template: `
        <section>
            <AssignmentsList title="In Progress" :assignments="inProgress" />
            <AssignmentsList title="Completed" :assignments="completed" />
            <AssignmentCreate @add="add" />
        </section>
    `,
    data() {
        return {
            assignments: [
                {
                    id: 1,
                    label: 'Finish project',
                    complete: false,
                    tag: 'math',
                },
                {
                    id: 2,
                    label: 'Read Chapter 4',
                    complete: false,
                    tag: 'science',
                },
                {
                    id: 3,
                    label: 'Turn in Homework',
                    complete: false,
                    tag: 'math',
                },
            ],
        };
    },
    computed: {
        completed() {
            return this.assignments.filter(a => a.complete);
        },
        inProgress() {
            return this.assignments.filter(a => !a.complete);
        },
    },
    methods: {
        add(newAssignment) {
            this.assignments.push({
                id: this.assignments.length + 1,
                label: newAssignment,
                complete: false,
            });
        },
    },
};
