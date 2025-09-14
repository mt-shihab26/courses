export default {
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return ['all', ...this.initialTags];
        },
    },
    template: `
        <div class="flex flex-wrap gap-2">
            <button
                v-for="tag in tags"
                :key="tag"
                @click="$emit('update:currentTag', tag)"
                :class="{
                    'bg-blue-600 text-white': currentTag === tag,
                    'bg-gray-200 text-gray-700 hover:bg-gray-300': currentTag !== tag
                }"
                class="px-3 py-1 rounded-md text-sm font-medium transition-colors">
                {{ tag }}
            </button>
        </div>
    `,
};
