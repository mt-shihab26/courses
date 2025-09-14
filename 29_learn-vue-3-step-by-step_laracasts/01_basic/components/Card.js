export default {
    props: {
        hidable: {
            type: Boolean,
            default: false,
        },
    },
    template: `
        <section 
            class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-gray-800"><slot name="heading" /></h2>
                <button v-show="hidable" @click="$emit('open', false)">&times;</button>
            </div>

            <slot />
        </section>
    `,
};
