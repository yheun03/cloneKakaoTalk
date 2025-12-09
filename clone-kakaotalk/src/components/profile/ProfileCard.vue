<template>
    <!-- 기본 타입 -->
    <div :class="profileCardClasses">
        <div class="profile-card-avatar">
            <app-avatar :userId="userId" :alt="`${profile.userName}의 프로필 이미지입니다.`" :size="setSize" :isNew="setNew" />
        </div>
        <div class="profile-card-info">
            <p class="name">{{ profile.userName }} <Icon18Birthday v-if="profileType == 'birthday'" :width="18" :height="18" /></p>
            <p class="status-message" v-if="profileType != 'update'">{{ profile.userMessage }}</p>
        </div>
        <div v-if="profileType == 'birthday'">
            <app-button type="round">선물하기</app-button>
        </div>
    </div>
</template>

<script>
import AppAvatar from '@/components/ui/AppAvatar.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Icon18Birthday from '@/assets/icons/18/ic-birthday.svg'
import profileService from '@/services/profileService'

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
    }
}
</script>
