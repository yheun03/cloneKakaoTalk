<template>
    <div class="k-table">
        <table>
            <tbody>
                <tr v-for="(header, index) in headers" :key="header">
                    <th>{{ header }}</th>
                    <td v-html="getFormattedCellValue(rows[index])"></td>
                </tr>
            </tbody>
        </table>
        <table v-if="hasButton" class="k-table-footer">
            <tbody>
                <tr>
                    <td>
                        <app-button type="text" custom-color="fff" @click="handleClick">{{ hasButton }}</app-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template> 
<script>
    import AppButton from '@/components/ui/AppButton.vue'

    export default {
        name: 'AppTable',
        components: {
            AppButton
        },
        inheritAttrs: false,
        emits: ['click'],
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
        },
        methods: {
            getFormattedCellValue(value) {
                if (value == '기한 만료') {
                    return `<span class="expired-text">${value}</span>`;
                }
                return value;
            },
            handleClick() {
                this.$emit('click');
            }
        }
    }
</script>