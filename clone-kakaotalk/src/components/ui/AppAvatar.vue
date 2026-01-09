<template>
    <div class="k-avatar" :class="avatarClasses" @click.stop="handleClick" :style="clickable ? 'cursor: pointer;' : ''">
        <img 
            v-if="hasImage"
            :src="resolvedSrc" 
            :alt="altText" 
            class="k-avatar__img" 
            @error="handleError"
        />
        <div v-else class="k-avatar__fallback" role="img" :aria-label="altText"></div>
    </div>
</template>

<script>
import defaultAvatar from '@/assets/images/profileImage/profile.png'
import profileService from '@/services/profileService'
import profileModalService from '@/services/profileModalService'

    export default {
        name: 'AppAvatar',
        props: {
            size: {
                type: [String, Number],
                default: '24',
                validator: value => {
                    const sizeStr = String(value);
                    return ['22', '24', '28', '36', '40', '44', '54', '84', '90'].includes(sizeStr);
                }
            },
            userId: {
                type: String,
                default: ''
            },
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            isNew: {
                type: Boolean,
                default: false
            },
            clickable: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                hasError: false
            }
        },
        computed: {
            effectiveUserId() {
                // 1순위: 명시적으로 전달된 userId
                if (this.userId) {
                    return this.userId
                }

                // 2순위: src 로 저장된 프로필 이미지와 매칭되는 userId 탐색
                if (this.src) {
                    const profiles = profileService.getAllProfiles()
                    const matched = profiles.find(profile => profile.profileImage === this.src)
                    if (matched) {
                        return matched.userId
                    }
                }

                return ''
            },
            profile() {
                if (!this.effectiveUserId) {
                    return {}
                }
                return profileService.getProfile(this.effectiveUserId) || {}
            },
            avatarClasses() {
                const sizeStr = String(this.size);
                if (this.isNew == true) {
                    return `k-avatar--size-${sizeStr} k-avatar--type-new`
                }
                return `k-avatar--size-${sizeStr}`
            },
            hasImage() {
                // 에러가 발생해도 기본 이미지를 표시하기 위해 항상 true 반환
                return true
            },
            resolvedSrc() {
                // 에러가 발생한 경우 기본 이미지 반환
                if (this.hasError) {
                    return defaultAvatar
                }
                if (this.profile.profileImage) {
                    return this.profile.profileImage
                }
                if (this.src) {
                    return this.src
                }
                return defaultAvatar
            },
            altText() {
                return this.alt || `${this.profile.userName || '사용자'}의 프로필 이미지`
            }
        },
        methods: {
            handleError() {
                this.hasError = true
            },
            handleClick() {
                if (this.clickable && this.effectiveUserId) {
                    profileModalService.openProfileModal(this.effectiveUserId)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>