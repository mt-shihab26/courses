export default {
    template: `
        <div>
            <button
                v-for="tag in tags"
                :key="tag"
                @click="$emit('update:currentTag', tag)"
                :class="{
                    secondary: currentTag !== tag
                }"
                style="margin-right: 10px;">
                {{ tag }}
            </button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return ['all', ...this.initialTags];
        },
    },
};
