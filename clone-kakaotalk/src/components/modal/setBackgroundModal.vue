<template>
    <teleport to="body">
        <div class="modal setBackgroundModal" @click.self="closeModal">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="title">배경화면 선택</p>
                </div>
                <div class="modal-body">
                    <KTabs :items="tabs" type="filled" />
                </div>
                <div class="modal-footer">
                    <KButton color="primary">적용</KButton>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import KButton from '@/components/ui/Button.vue'
import KTabs from '@/components/ui/Tab.vue'

import { markRaw } from 'vue'
import IllustrationTab from '@/views/setBackground/IllustrationTab.vue'
import ColorTab from '@/views/setBackground/ColorTab.vue'

export default {
    name: 'SetBackgroundModal',
    components: {
        KButton,
        KTabs
    },
    emits: ['close'],
    data() {
        return {
            tabs: [
                { label: '일러스트', value: 'illustration', component: markRaw(IllustrationTab) },
                { label: '색상', value: 'color', component: markRaw(ColorTab) },
            ],
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>