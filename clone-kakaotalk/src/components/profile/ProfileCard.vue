<template>
    <div class="profile-card">
        <KAvatar :src="src" :alt="alt" size="40" />
        <div class="info">
            <p class="name">{{ name }} <i class="icon ic-birthday" v-if="birthday"/></p>
            <p class="status-message">{{ statusMessage }}</p>
        </div>
        <div v-if="birthday">
            <KButton type="round">선물하기</KButton>
        </div>
    </div>
</template>

<script>
    import KAvatar from '@/components/ui/Avatar.vue'
    import KButton from '@/components/ui/Button.vue'
    export default {
        name: 'ProfileCard',
        components: {
            KAvatar,
            KButton
        },
        props: {
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            statusMessage: {
                type: String,
                default: ''
            },
            birthday: {
                type: Boolean,
                default: false
            }
        }
    }
</script>