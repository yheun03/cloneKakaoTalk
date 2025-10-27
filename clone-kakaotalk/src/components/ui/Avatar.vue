<template>
    <div class="k-avatar" :class="avatarClasses">
        <img :src="src" :alt="alt" class="k-avatar__img" />
    </div>
</template>

<script>
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
        computed: {
            avatarClasses() {
                const sizeStr = String(this.size);
                if (this.isNew == true) {
                    return `k-avatar--size-${sizeStr} k-avatar--type-new`
                }
                return `k-avatar--size-${sizeStr}`
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>