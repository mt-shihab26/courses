import AssignmentsItem from './AssignmentsItem.js';
import AssignmentTags from './AssignmentTags.js';
import Card from './Card.js';

export default {
    components: {
        AssignmentsItem,
        AssignmentTags,
        Card,
    },
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
    template: `
        <Card
            :hidable="hidable"
        >
            <!-- <template v-slot:heading> -->
            <template #heading>
                {{ title }} ({{ assignments.length }})
            </template>

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
        </Card>
    `,
};
