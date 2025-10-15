<template>
    <div class="modal ConfirmModal">
        <div class="modal-content">
            <div class="modal-body">
                <p>{{content}}</p>
            </div>
            <div class="modal-footer">
                <KButton @click="handleClickCancel">{{ cancelButton }}</KButton>
                <KButton color="primary" @click="handleClickConfirm">{{ confirmButton }}</KButton>
            </div>
        </div>
    </div>
</template>

<script>
import KButton from '@/components/ui/Button.vue';

export default {
    name: 'ConfirmModal',
    components: {
        KButton,
    },
    props: {
        type: {
            type: String,
            default: "confirm",
            validator: value => ['confirm', 'alert'].includes(value)
        },
        content: {
            type: String,
            default: ""
        },
        cancelButton: {
            type: String,
            default: ""
        },
        confirmButton: {
            type: String,
            default: ""
        }
    },
    methods: {
        handleClickCancel() {
            this.$emit('clickCancel');
        },
        handleClickConfirm() {
            this.$emit('clickConfirm');
        }
    }
}
</script>