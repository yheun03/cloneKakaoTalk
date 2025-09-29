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
                type: String,
                default: '24',
                validator: value => ['22', '24', '28', '36', '40', '44', '54', '84', '90'].includes(value)
            },
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: '',
                validator: value => ['', 'new'].includes(value)
            }
        },
        computed: {
            avatarClasses() {
                if (this.type === 'new') {
                    return `k-avatar--size-${this.size} k-avatar--type-new`
                }
                return `k-avatar--size-${this.size}`
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>