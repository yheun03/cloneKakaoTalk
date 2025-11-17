<template>
    <div class="view-container view-setting">
        <div class="view-container-header">
            <h1>설정</h1>
        </div>
        <div class="view-container-body">
            <KTabs :items="tabs" type="setting" />
        </div>
    </div>
</template>
<script>
import KTabs from '@/components/ui/Tab.vue'

import SettingAccountTabView from '@/views/settings/SettingAccountTabView.vue'
import SettingSecurityTabView from '@/views/settings/SettingSecurityTabView.vue'
import SettingNotificationTabView from '@/views/settings/SettingNotificationTabView.vue'
import SettingFriendTabView from '@/views/settings/SettingFriendTabView.vue'
import SettingChatTabView from '@/views/settings/SettingChatTabView.vue'
import SettingScreenTabView from '@/views/settings/SettingScreenTabView.vue'
import SettingCallTabView from '@/views/settings/SettingCallTabView.vue'
import SettingStorageTabView from '@/views/settings/SettingStorageTabView.vue'

import { markRaw } from 'vue'


export default {
    name: 'SettingView',
    components: {
        KTabs
    },
    data() {
        return {
            tabs: [
                { label: '계정', value: 'setting-account', component: markRaw(SettingAccountTabView) },
                { label: '보안', value: 'setting-security', component: markRaw(SettingSecurityTabView) },
                { label: '알림', value: 'setting-notification', component: markRaw(SettingNotificationTabView) },
                { label: '친구', value: 'setting-friend', component: markRaw(SettingFriendTabView) },
                { label: '채팅', value: 'setting-chat', component: markRaw(SettingChatTabView) },
                { label: '화면', value: 'setting-screen', component: markRaw(SettingScreenTabView) },
                { label: '통화', value: 'setting-call', component: markRaw(SettingCallTabView) },
                { label: '저장공간 관리', value: 'setting-storage', component: markRaw(SettingStorageTabView) },
            ]
        }
    }
}
</script>