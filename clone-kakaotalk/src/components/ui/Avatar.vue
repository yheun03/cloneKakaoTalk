<template>
    <div class="k-avatar" :class="avatarClasses">
        <img 
            :src="resolvedSrc" 
            :alt="alt || '프로필 이미지'" 
            class="k-avatar__img" 
            @error="handleError"
        />
    </div>
</template>

<script>
    import defaultAvatar from '@/assets/images/profileImage/profile.png'

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
            }
        },
        data() {
            return {
                hasError: false
            }
        },
        computed: {
            avatarClasses() {
                const sizeStr = String(this.size);
                if (this.isNew == true) {
                    return `k-avatar--size-${sizeStr} k-avatar--type-new`
                }
                return `k-avatar--size-${sizeStr}`
            },
            resolvedSrc() {
                if (!this.src || this.hasError) {
                    return defaultAvatar
                }
                return this.src
            }
        },
        methods: {
            handleError() {
                this.hasError = true
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>