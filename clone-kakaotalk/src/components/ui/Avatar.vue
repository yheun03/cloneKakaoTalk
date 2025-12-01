<template>
    <div class="k-avatar" :class="avatarClasses" @click="handleClick" :style="clickable ? 'cursor: pointer;' : ''">
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
    import eventBus from '@/utils/eventBus'

    export default {
        name: 'KAvatar',
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
            profile() {
                return profileService.getProfile(this.userId) || {}
            },
            avatarClasses() {
                const sizeStr = String(this.size);
                if (this.isNew == true) {
                    return `k-avatar--size-${sizeStr} k-avatar--type-new`
                }
                return `k-avatar--size-${sizeStr}`
            },
            hasImage() {
                return !!(this.profile.profileImage || this.src) && !this.hasError
            },
            resolvedSrc() {
                if (this.profile.profileImage && !this.hasError) {
                    return this.profile.profileImage
                }
                if (this.src && !this.hasError) {
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
                if (this.clickable && this.userId) {
                    eventBus.emit('open-profile-modal', this.userId)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>