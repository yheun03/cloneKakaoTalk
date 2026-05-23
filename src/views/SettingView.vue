<template>
    <div class="view-container view-setting">
        <div class="view-container-header">
            <h1>설정</h1>
        </div>
        <div class="view-container-body">
            <app-tabs :items="tabs" type="setting" />
        </div>
    </div>
</template>
<script>
import AppTabs from '@/components/ui/AppTabs.vue'

import SettingAccountTabView from '@/views/tabs/settings/SettingAccountTabView.vue'
import SettingSecurityTabView from '@/views/tabs/settings/SettingSecurityTabView.vue'
import SettingNotificationTabView from '@/views/tabs/settings/SettingNotificationTabView.vue'
import SettingFriendTabView from '@/views/tabs/settings/SettingFriendTabView.vue'
import SettingChatTabView from '@/views/tabs/settings/SettingChatTabView.vue'
import SettingScreenTabView from '@/views/tabs/settings/SettingScreenTabView.vue'

import { markRaw } from 'vue'


export default {
    name: 'SettingView',
    components: {
        AppTabs
    },
    data() {
        return {
            tabs: [
                { label: '계정', value: 'setting-account', component: markRaw(SettingAccountTabView) },
                { label: '보안', value: 'setting-security', component: markRaw(SettingSecurityTabView) },
                { label: '알림', value: 'setting-notification', component: markRaw(SettingNotificationTabView) },
                { label: '친구', value: 'setting-friend', component: markRaw(SettingFriendTabView) },
                { label: '채팅', value: 'setting-chat', component: markRaw(SettingChatTabView) },
                { label: '화면', value: 'setting-screen', component: markRaw(SettingScreenTabView) }
            ]
        }
    }
}
</script>