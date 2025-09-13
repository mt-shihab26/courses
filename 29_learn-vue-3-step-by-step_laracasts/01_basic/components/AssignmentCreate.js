export default {
    template: `
        <form @submit.prevent="add">
            <input placeholder="New assignment..." v-model="newAssignment" />
            <button type="submit">add</button>
        </form>
    `,
    data() {
        return {
            newAssignment: '',
        };
    },
    methods: {
        add() {
            if (this.newAssignment.trim().length <= 0) return;
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        },
    },
};
