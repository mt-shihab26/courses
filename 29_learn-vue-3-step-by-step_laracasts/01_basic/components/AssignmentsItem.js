export default {
    props: {
        assignment: Object,
    },
    template: `
        <li class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <label 
                class="flex items-center space-x-3 flex-1 cursor-pointer"
                :class="{ 'line-through text-gray-500': assignment.complete }"
            >
                <input 
                    type="checkbox" 
                    v-model="assignment.complete" 
                    class="w-4 h-4 mr-2 text-blue-600 rounded focus:ring-blue-500"
                />
                {{ assignment.label }}
            </label>
        </li>
    `,
};
