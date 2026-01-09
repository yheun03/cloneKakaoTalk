<template>
    <div class="gnb">
        <div class="gnb-top">
            <app-button 
                type="icon" 
                :button-size="48" 
                :active="isProfileActive"
                @click="goToProfile">
                <Icon32Profile :width="32" :height="32" />
            </app-button>
            <app-button 
                type="icon" 
                :button-size="48" 
                :active="isChatListActive"
                @click="goToChatList">
                <Icon32Chat :width="32" :height="32" />
            </app-button>
            <app-button 
                type="icon" 
                :button-size="48" 
                :active="isMoreActive"
                @click="goToMore">
                <Icon32More :width="32" :height="32" />
            </app-button>
        </div>
        <div class="gnb-bottom">
            <app-button type="icon" :button-size="24">
                <Icon24Bell :width="24" :height="24" />
            </app-button>
            <app-button 
                type="icon" 
                :button-size="24" 
                :active="isSettingActive"
                @click="goToSetting">
                <Icon24Setting :width="24" :height="24" />
            </app-button>
        </div>
    </div>
</template>
<script>
import AppButton from '@/components/ui/AppButton.vue'
import Icon32Profile from '@/assets/icons/32/ic-profile.svg'
import Icon32Chat from '@/assets/icons/32/ic-chat.svg'
import Icon32More from '@/assets/icons/32/ic-more.svg'
import Icon24Bell from '@/assets/icons/24/ic-bell.svg'
import Icon24Setting from '@/assets/icons/24/ic-setting.svg'
import navigationService from '@/services/navigationService'
import { ROUTES } from '@/constants/routes'

export default {
    name: 'GlobalNav',
    components: {
        AppButton,
        Icon32Profile,
        Icon32Chat,
        Icon32More,
        Icon24Bell,
        Icon24Setting
    },
    computed: {
        isProfileActive() {
            return this.$route.path === ROUTES.PROFILE
        },
        isChatListActive() {
            return this.$route.path === ROUTES.CHAT_LIST
        },
        isMoreActive() {
            return this.$route.path === ROUTES.MORE
        },
        isSettingActive() {
            return this.$route.path === ROUTES.SETTING
        }
    },
    methods: {
        goToProfile() {
            navigationService.goToProfile()
        },
        goToChatList() {
            navigationService.goToChatList()
        },
        goToMore() {
            navigationService.goToMore()
        },
        goToSetting() {
            navigationService.goToSetting()
        }
    }
}
</script>