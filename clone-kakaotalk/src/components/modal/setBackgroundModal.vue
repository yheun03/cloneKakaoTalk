<template>
    <teleport to="body">
        <div class="modal set-background-modal" @click.self="closeModal">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="title">배경화면 선택</p>
                </div>
                <div class="modal-body">
                    <app-tabs :items="tabs" type="filled" />
                </div>
                <div class="modal-footer">
                    <app-button color="primary">적용</app-button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue'
import AppTabs from '@/components/ui/AppTabs.vue'

import { markRaw } from 'vue'
import IllustrationTab from '@/views/setBackground/IllustrationTab.vue'
import ColorTab from '@/views/setBackground/ColorTab.vue'

export default {
    name: 'SetBackgroundModal',
    components: {
        AppButton,
        AppTabs
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