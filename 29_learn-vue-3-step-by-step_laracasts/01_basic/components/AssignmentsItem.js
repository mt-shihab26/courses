export default {
    template: `
        <li class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
                type="checkbox" 
                v-model="assignment.complete" 
                class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label 
                class="flex-1 cursor-pointer"
                :class="{ 'line-through text-gray-500': assignment.complete }"
            >
                {{ assignment.label }}
            </label>
        </li>
    `,
    props: {
        assignment: Object,
    },
};
