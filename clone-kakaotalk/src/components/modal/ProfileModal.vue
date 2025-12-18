<template>
    <teleport to="body">
        <div class="modal profile-modal" @click.self="closeModal">
            <div class="modal-content" :style="backgroundStyle">
                <div class="modal-header">
                    <div class="btn-wrap">
                        <app-button type="icon" :button-size="24" @click="openGiftshop">
                            <Icon24Gift :width="24" :height="24" />
                        </app-button>
                        <app-button type="icon" :button-size="24" @click="openSetBackgroundModal">
                            <Icon24Gallery :width="24" :height="24" />
                        </app-button>
                    </div>
                </div>
                <div class="modal-body">
                    <app-avatar :userId="userId" :alt="`${profile.userName}의 프로필 이미지입니다.`" :size="84" />
                    <p class="profile-name">{{ profile.userName }}</p>
                    <p class="profile-message">{{ profile.userMessage }}</p>
                </div>
                <div class="modal-footer">
                    <label>
                        <app-button type="icon" @click="goToChat">
                            <Icon24Emoji :width="24" :height="24" />
                        </app-button>
                        <span>나와의 채팅</span>
                    </label>
                    <label>
                        <app-button type="icon" @click="openProfileEditModal">
                            <Icon24Menu :width="24" :height="24" />
                        </app-button>
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
                :userId="userId"
                @close="closeProfileEditModal"
            />
        </div>
    </teleport>
</template>

<script>
import AppAvatar from '@/components/ui/AppAvatar.vue'
import AppButton from '@/components/ui/AppButton.vue'
import SetBackgroundModal from '@/components/modal/SetBackgroundModal.vue'
import ProfileEditModal from '@/components/modal/ProfileEditModal.vue'
import Icon24Gift from '@/assets/icons/24/ic-gift.svg'
import Icon24Gallery from '@/assets/icons/24/ic-gallery.svg'
import Icon24Emoji from '@/assets/icons/24/ic-emoji.svg'
import Icon24Menu from '@/assets/icons/24/ic-menu.svg'
import profileService from '@/services/profileService'

export default {
    name: 'ProfileModal',
    components: {
        AppAvatar,
        AppButton,
        SetBackgroundModal,
        ProfileEditModal,
        Icon24Gift,
        Icon24Gallery,
        Icon24Emoji,
        Icon24Menu
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
            showSetBackgroundModal: false,
            showProfileEditModal: false
        }
    },
    computed: {
        profile() {
            return profileService.getProfile(this.userId) || {}
        },
        backgroundStyle() {
            if (!this.profile.backgroundImage) {
                return {}
            }
            const value = this.profile.backgroundImage.trim()
            const hexPattern = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
            if (hexPattern.test(value)) {
                return {
                    backgroundColor: value
                }
            }
            return {
                backgroundImage: `url(${value})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
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
        },
        goToChat() {
            this.$emit('close')
            this.$router.push('/chat')
        }
    }
}
</script>