<template>
    <!-- 기본 타입 -->
    <div :class="profileCardClasses" @click="handleClick">
        <div class="profile-card-avatar">
            <app-avatar :userId="userId" :alt="`${profile.userName}의 프로필 이미지입니다.`" :size="setSize" :isNew="setNew" @click.stop="handleAvatarClick" />
        </div>
        <div class="profile-card-info">
            <p class="name">
                <span>{{ profile.userName }}</span>
                <Icon18Birthday v-if="profileType == 'birthday'" :width="18" :height="18" />
            </p>
            <p class="status-message" v-if="profileType != 'update'">{{ profile.userMessage }}</p>
        </div>
        <div v-if="profileType == 'birthday'" @click.stop>
            <app-button type="round">선물하기</app-button>
        </div>
    </div>
</template>

<script>
import AppAvatar from '@/components/ui/AppAvatar.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Icon18Birthday from '@/assets/icons/18/ic-birthday.svg'
import profileService from '@/services/profileService'
import profileModalService from '@/services/profileModalService'

export default {
    name: 'ProfileCard',
    components: {
        AppAvatar,
        AppButton,
        Icon18Birthday
    },
    props: {
        userId: {
            type: String,
            default: ''
        },
        profileType: {
            type: String,
            default: 'default',
            validator: value => ['default', 'my', 'update', 'birthday'].includes(value)
        }
    },
    computed: {
        profile() {
            return profileService.getProfile(this.userId) || {}
        },
        profileCardClasses() {
            return `profile-card type-${this.profileType}`
        },
        setSize() {
            if (this.profileType == 'my') {
                return 54
            } else {
                return 40
            }
        },
        setNew() {
            if (this.profileType == 'update') {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        handleClick() {
            // 내 프로필이 아닌 경우에만 모달 열기
            if (this.profileType !== 'my' && this.userId) {
                profileModalService.openProfileModal(this.userId)
            }
        },
        handleAvatarClick() {
            // 아바타 클릭 시에도 모달 열기 (내 프로필이 아닌 경우)
            if (this.profileType !== 'my' && this.userId) {
                profileModalService.openProfileModal(this.userId)
            }
        }
    }
}
</script>
