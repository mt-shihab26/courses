import AssignmentsList from './AssignmentsList.js';

export default {
    components: {
        AssignmentsList,
    },
    template: `
        <AssignmentsList title="In Progress" :assignments="inProgressAssignments" />
        <AssignmentsList title="Completed" :assignments="completedAssignments" />
    `,
    data() {
        return {
            assignments: [
                {
                    id: 1,
                    label: 'Finish project',
                    complete: false,
                },
                {
                    id: 2,
                    label: 'Read Chapter 4',
                    complete: false,
                },
                {
                    id: 3,
                    label: 'Turn in Homework',
                    complete: false,
                },
            ],
        };
    },
    computed: {
        completedAssignments() {
            return this.assignments.filter(a => a.complete);
        },
        inProgressAssignments() {
            return this.assignments.filter(a => !a.complete);
        },
    },
};
