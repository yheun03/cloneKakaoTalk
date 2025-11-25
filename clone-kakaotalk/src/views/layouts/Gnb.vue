<template>
    <div class="gnb">
        <div class="gnb-top">
            <KButton 
                type="icon" 
                icon="ic-profile" 
                iconSize="32" 
                buttonSize="48" 
                :active="isProfileActive"
                @click="goToProfile">
            </KButton>
            <KButton 
                type="icon" 
                icon="ic-chat" 
                iconSize="32" 
                buttonSize="48" 
                :active="isChatListActive"
                @click="goToChatList">
            </KButton>
            <KButton 
                type="icon" 
                icon="ic-more" 
                iconSize="32" 
                buttonSize="48" 
                :active="isMoreActive"
                @click="goToMore">
            </KButton>
        </div>
        <div class="gnb-bottom">
            <KButton type="icon" icon="ic-bell" iconSize="24" buttonSize="24"></KButton>
            <KButton 
                type="icon" 
                icon="ic-setting" 
                iconSize="24" 
                buttonSize="24" 
                :active="isSettingActive"
                @click="goToSetting">
            </KButton>
        </div>
    </div>
</template>
<script>
import KButton from '@/components/ui/Button.vue'

export default {
    name: 'GlobalNav',
    components: {
        KButton
    },
    computed: {
        isProfileActive() {
            return this.$route.path === '/'
        },
        isChatListActive() {
            return this.$route.path === '/chat-list'
        },
        isMoreActive() {
            return this.$route.path === '/more'
        },
        isSettingActive() {
            return this.$route.path === '/setting'
        }
    },
    methods: {
        goToProfile() {
            this.$router.push('/')
        },
        goToChatList() {
            this.$router.push('/chat-list')
        },
        goToMore() {
            this.$router.push('/more')
        },
        goToSetting() {
            this.$router.push('/setting')
        }
    }
}
</script>