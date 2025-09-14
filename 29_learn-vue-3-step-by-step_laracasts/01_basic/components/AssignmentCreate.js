export default {
    template: `
        <form @submit.prevent="add" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div class="flex gap-3">
                <input 
                    placeholder="New assignment..." 
                    v-model="newAssignment"
                    class="flex-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button 
                    type="submit"
                    class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
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
