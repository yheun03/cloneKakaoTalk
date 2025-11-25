<template>
    <div class="modal profileModal" @click.self="closeModal">
        <div class="modal-content">
            <div class="modal-header">
                <div class="btn-wrap">
                    <KButton type="icon" icon="ic-bell" iconSize="24" buttonSize="24"></KButton>
                    <KButton type="icon" icon="ic-file" iconSize="24" buttonSize="24"></KButton>
                </div>
            </div>
            <div class="modal-body">
                <KAvatar :src="profileImage" :alt="`${userName}의 프로필 이미지입니다.`" :size="84" />
                <p class="profile-name">{{ userName }}</p>
                <p class="profile-message">{{ userMessage }}</p>
            </div>
            <div class="modal-footer">
                <label>
                    <KButton type="icon" icon="ic-emoji" iconSize="24" @click="console.log('test')"></KButton>
                    <span>나와의 채팅</span>
                </label>
                <label>
                    <KButton type="icon" icon="ic-menu" iconSize="24" @click="console.log('test')"></KButton>
                    <span>프로필 편집</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import KAvatar from '@/components/ui/Avatar.vue'
import KButton from '@/components/ui/Button.vue'

export default {
    name: 'ProfileModal',
    components: {
        KAvatar,
        KButton
    },
    props: {
        profileImage: {
            type: String,
            default: ''
        },
        userName: {
            type: String,
            default: ''
        },
        userMessage: {
            type: String,
            default: ''
        }
    },
    emits: ['close'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>