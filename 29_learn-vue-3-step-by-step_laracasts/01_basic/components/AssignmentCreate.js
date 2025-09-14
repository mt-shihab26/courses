export default {
    template: `
        <form @submit.prevent="add" class="mt-4 pt-4 border-t border-gray-200">
            <div class="flex gap-3">
                <input 
                    placeholder="New assignment..." 
                    v-model="newAssignment"
                    class="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <button 
                    type="submit"
                    class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                    Add
                </button>
            </div>
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
