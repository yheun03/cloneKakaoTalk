<template>
    <div class="gnb">
        <div class="gnb-top">
            <app-button 
                type="icon" 
                icon="ic-profile" 
                :icon-size="32" 
                :button-size="48" 
                :active="isProfileActive"
                @click="goToProfile">
            </app-button>
            <app-button 
                type="icon" 
                icon="ic-chat" 
                :icon-size="32" 
                :button-size="48" 
                :active="isChatListActive"
                @click="goToChatList">
            </app-button>
            <app-button 
                type="icon" 
                icon="ic-more" 
                :icon-size="32" 
                :button-size="48" 
                :active="isMoreActive"
                @click="goToMore">
            </app-button>
        </div>
        <div class="gnb-bottom">
            <app-button type="icon" icon="ic-bell" :icon-size="24" :button-size="24"></app-button>
            <app-button 
                type="icon" 
                icon="ic-setting" 
                :icon-size="24" 
                :button-size="24" 
                :active="isSettingActive"
                @click="goToSetting">
            </app-button>
        </div>
    </div>
</template>
<script>
import AppButton from '@/components/ui/AppButton.vue'

export default {
    name: 'GlobalNav',
    components: {
        AppButton
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