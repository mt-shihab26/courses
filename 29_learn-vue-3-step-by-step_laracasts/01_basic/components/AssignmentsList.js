import AssignmentsItem from './AssignmentsItem.js';
import AssignmentTags from './AssignmentTags.js';

export default {
    components: {
        AssignmentsItem,
        AssignmentTags,
    },
    template: `
        <section 
            class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800">{{ title }} ({{ assignments.length }})</h2>
                <button v-show="hidable">&times;</button>
            </div>

            <AssignmentTags
                :initialTags="tags"
                v-model:currentTag="currentTag"
            />
            
            <ul class="mt-5 space-y-2">
                <AssignmentsItem
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                />
            </ul>

            <slot />
        </section>
    `,
    props: {
        title: String,
        assignments: Array,
        hidable: false,
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
