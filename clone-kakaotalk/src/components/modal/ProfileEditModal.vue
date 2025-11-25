<template>
    <teleport to="body">
        <div class="modal setBackgroundModal" @click.self="closeModal">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="title">배경화면 선택</p>
                </div>
                <div class="modal-body">
                    <KInput type="text" placeholder="이름" value="홍길동" :maxlength="20"/>
                    <KInput type="text" placeholder="상태메시지 입력" value="상태메시지를 입력해주세요." :maxlength="20"/>
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
import KInput from '@/components/ui/Input.vue'

export default {
    name: 'ProfileEditModal',
    components: {
        KButton,
        KInput
    },
    emits: ['close'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>