<template>
    <teleport to="body">
        <div class="modal setBackgroundModal" @click.self="closeModal">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="title">기본프로필 편집</p>
                </div>
                <div class="modal-body">
                    <div class="profile-wrap">
                        <KAvatar :userId="userId" :alt="`${profile.userName}의 프로필 이미지입니다.`" :size="90" />
                        <KInput type="text" placeholder="이름" v-model="editableUserName" :maxlength="20"/>
                        <KInput type="text" placeholder="상태메시지 입력" v-model="editableUserMessage" :maxlength="20"/>
                    </div>
                </div>
                <div class="modal-footer">
                    <KButton color="primary" @click="saveProfile">확인</KButton>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import KButton from '@/components/ui/Button.vue'
import KInput from '@/components/ui/Input.vue'
import KAvatar from '@/components/ui/Avatar.vue'
import profileService from '@/services/profileService'

export default {
    name: 'ProfileEditModal',
    components: {
        KButton,
        KInput,
        KAvatar
    },
    props: {
        userId: {
            type: String,
            required: true
        }
    },
    emits: ['close'],
    data() {
        return {
            editableUserName: '',
            editableUserMessage: ''
        }
    },
    computed: {
        profile() {
            return profileService.getProfile(this.userId) || {}
        }
    },
    watch: {
        profile: {
            immediate: true,
            handler(newProfile) {
                this.editableUserName = newProfile.userName || ''
                this.editableUserMessage = newProfile.userMessage || ''
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        saveProfile() {
            profileService.updateProfile(this.userId, {
                userName: this.editableUserName,
                userMessage: this.editableUserMessage
            })
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.profile-wrap {
    height: 50dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    .k-avatar{
        margin-bottom: 20px;
    }
    .k-input{
        width: 100%;
    }
}
</style>