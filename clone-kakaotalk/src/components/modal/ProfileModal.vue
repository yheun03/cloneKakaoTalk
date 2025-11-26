<template>
    <teleport to="body">
        <div class="modal profileModal" @click.self="closeModal">
            <div class="modal-content" :style="backgroundStyle">
                <div class="modal-header">
                    <div class="btn-wrap">
                        <KButton type="icon" icon="ic-bell" iconSize="24" buttonSize="24" @click="openGiftshop"></KButton>
                        <KButton type="icon" icon="ic-file" iconSize="24" buttonSize="24" @click="openSetBackgroundModal"></KButton>
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
                        <KButton type="icon" icon="ic-menu" iconSize="24" @click="openProfileEditModal"></KButton>
                        <span>프로필 편집</span>
                    </label>
                </div>
            </div>
            <SetBackgroundModal 
                v-if="showSetBackgroundModal"
                @close="closeSetBackgroundModal"
            />
            <ProfileEditModal 
                v-if="showProfileEditModal"
                @close="closeProfileEditModal"
            />
        </div>
    </teleport>
</template>

<script>
import KAvatar from '@/components/ui/Avatar.vue'
import KButton from '@/components/ui/Button.vue'
import SetBackgroundModal from '@/components/modal/setBackgroundModal.vue'
import ProfileEditModal from '@/components/modal/ProfileEditModal.vue'

export default {
    name: 'ProfileModal',
    components: {
        KAvatar,
        KButton,
        SetBackgroundModal,
        ProfileEditModal
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
        },
        backgroundImage: {
            type: String,
            default: ''
        }
    },
    emits: ['close'],
    data() {
        return {
            showSetBackgroundModal: false,
            showProfileEditModal: false
        }
    },
    computed: {
        backgroundStyle() {
            if (!this.backgroundImage) {
                return {}
            }
            const value = this.backgroundImage.trim()
            const hexPattern = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
            if (hexPattern.test(value)) {
                return {
                    backgroundColor: value
                }
            }
            return {
                backgroundImage: `url(${value})`,
            }
        }
    },
    methods: {
        closeModal() {
            if (this.showSetBackgroundModal) {
                this.showSetBackgroundModal = false
                return
            }
            this.$emit('close')
        },
        openGiftshop() {
            window.open('https://gift.kakao.com/', '_blank')
        },
        openSetBackgroundModal() {
            this.showSetBackgroundModal = true
        },
        closeSetBackgroundModal() {
            this.showSetBackgroundModal = false
        },
        openProfileEditModal() {
            this.showProfileEditModal = true
        },
        closeProfileEditModal() {
            this.showProfileEditModal = false
        }
    }
}
</script>