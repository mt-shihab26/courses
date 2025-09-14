import AssignmentsItem from './AssignmentsItem.js';
import AssignmentTags from './AssignmentTags.js';
import Card from './Card.js';

export default {
    components: {
        AssignmentsItem,
        AssignmentTags,
        Card,
    },
    template: `
        <Card>
            <template v-slot="heading">
                {{ title }} ({{ assignments.length }})
            </template>
            <template v-slot="default">
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
            </template>
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
