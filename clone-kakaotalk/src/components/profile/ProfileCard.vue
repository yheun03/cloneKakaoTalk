<template>
    <div class="profile-card" v-if="!type">
        <KAvatar :src="src" :alt="alt" :isNew="isNew" size="40" />
        <div class="profile-card-info">
            <p class="name">{{ name }} <i class="icon ic-birthday" v-if="isBirthday"/></p>
            <p class="status-message">{{ statusMessage }}</p>
        </div>
        <div v-if="isBirthday">
            <KButton type="round">선물하기</KButton>
        </div>
    </div>
    <div class="profile-card type-my" v-else-if="type == 'my'">
        <KAvatar :src="src" :alt="alt" :isNew="isNew" size="44" />
        <div class="profile-card-info">
            <p class="name">{{ name }}</p>
            <p class="status-message">{{ statusMessage }}</p>
        </div>
    </div>
    <div class="profile-card type-birthday" v-else-if="type == 'birthday'">
        <KAvatar :src="src" :alt="alt" :isNew="isNew" size="40" />
        <div class="profile-card-info">
            <p class="name">{{ name }}</p>
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
            type: {
                type: String,
                default: '',
                validator: value => ['', 'birthday'].includes(value)
            },
            isNew: {
                type: Boolean,
                default: false
            },
            statusMessage: {
                type: String,
                default: ''
            },
            isBirthday: {
                type: Boolean,
                default: false
            }
        }
    }
</script>