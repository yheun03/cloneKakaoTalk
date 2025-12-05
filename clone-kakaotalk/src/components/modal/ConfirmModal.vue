<template>
    <div class="modal confirm-modal">
        <div class="modal-content">
            <div class="modal-body">
                <p>{{content}}</p>
            </div>
            <div class="modal-footer">
                <app-button @click="handleClickCancel">{{ cancelButton }}</app-button>
                <app-button color="primary" @click="handleClickConfirm">{{ confirmButton }}</app-button>
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue';

export default {
    name: 'ConfirmModal',
    components: {
        AppButton,
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