<template>
    <div class="k-table">
        <table>
            <tr v-for="(header, index) in headers" :key="header">
                <th>{{ header }}</th>
                <td>{{ rows[index] }}</td>
            </tr>
        </table>
        <table v-if="hasButton" class="k-table-footer">
            <tr>
                <td>
                    <KButton type="text" customColor="fff" v-bind="$attrs">{{ hasButton }}</KButton>
                </td>
            </tr>
        </table>
    </div>
</template> 
<script>
    import KButton from '@/components/ui/Button.vue'

    export default {
        name: 'KTable',
        components: {
            KButton
        },
        inheritAttrs: false,
        props: {
            headers: {
                type: Array,
                default: () => []
            },
            rows: {
                type: Array,
                default: () => []
            },
            hasButton: {
                type: String,
                default: ''
            }
        }
    }
</script>