import AssignmentsItem from './AssignmentsItem.js';

export default {
    components: {
        AssignmentsItem,
    },
    template: `
        <section v-show="assignments.length">
            <h2>{{ title }} ({{ assignments.length }})</h2>

            <div>
                <button 
                    v-for="tag in tags"
                    :key="tag"
                    @click="currentTag = tag"
                    :class="{
                        secondary: currentTag !== tag 
                    }" 
                    style="margin-right: 10px;">
                    {{ tag }}
                </button>
            </div>

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
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        },
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    },
};
