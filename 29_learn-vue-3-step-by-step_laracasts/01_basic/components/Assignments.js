import AssignmentCreate from './AssignmentCreate.js';
import AssignmentsList from './AssignmentsList.js';

export default {
    components: {
        AssignmentsList,
        AssignmentCreate,
    },
    template: `
        <section class="max-w-4xl mx-auto p-6 space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AssignmentsList 
                    title="In Progress" 
                    :assignments="inProgress"
                >
                    <AssignmentCreate @add="add" />
                </AssignmentsList >
                <AssignmentsList 
                    title="Completed" 
                    :assignments="completed" 
                    :hidable="true" 
                    @click="$emit('toggle')" 
                />
            </div>
        </section>
    `,
    data() {
        return {
            assignments: [],
        };
    },
    created() {
        fetch('http://localhost:8000/assignments')
            .then(r => r.json())
            .then(data => (this.assignments = data));
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
