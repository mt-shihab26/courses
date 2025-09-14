export default {
    template: `
        <div>
            <button
                v-for="tag in tags"
                :key="tag"
                @click="$emit('update:modelValue', tag)"
                :class="{
                    secondary: modelValue !== tag
                }"
                style="margin-right: 10px;">
                {{ tag }}
            </button>
        </div>
    `,
    props: {
        initialTags: Array,
        modelValue: String,
    },
    computed: {
        tags() {
            return ['all', ...this.initialTags];
        },
    },
};
