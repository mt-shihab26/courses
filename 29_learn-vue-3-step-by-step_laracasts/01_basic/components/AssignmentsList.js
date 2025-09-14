import AssignmentsItem from './AssignmentsItem.js';
import AssignmentTags from './AssignmentTags.js';

export default {
    components: {
        AssignmentsItem,
        AssignmentTags,
    },
    template: `
        <section v-show="assignments.length">
            <h2>{{ title }} ({{ assignments.length }})</h2>

            <AssignmentTags
                :initialTags="tags"
                v-model="currentTag"
            />
            
            <ul style="margin-top: 20px">
                <AssignmentsItem
                    v-for="assignment in filteredAssignments"
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
    data() {
        return {
            currentTag: 'all',
        };
    },
    computed: {
        tags() {
            return [...new Set(this.assignments.map(a => a.tag))];
        },
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    },
};
