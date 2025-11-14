<template>
    <div class="setting-notification-tab">
        <dl class="wrap-setting">
            <dt>
                <KCheckbox v-model="showNotificationWindow">알림창</KCheckbox>
            </dt>
            <dd>
                <p class="wrap-setting-description">알림내용</p>
                <KSelect :options="notificationOptions" />
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt><p class="wrap-setting-title">PC 인증 해제</p></dt>
            <dd>
                <p class="wrap-setting-description">사용하는 PC가 변경되었거나 도용이 의심되는 경우 PC 인증을 해제한 후 다시 인증을 받을 수 있습니다.</p>
                <KButton>PC 인증 해제</KButton>
            </dd>
        </dl>
    </div>
</template>
<script>
import KCheckbox from '@/components/ui/Checkbox.vue'
import KButton from '@/components/ui/Button.vue'
import KSelect from '@/components/ui/Select.vue'
export default {
    name: 'SettingNotificationTabView',
    components: {
        KCheckbox,
        KButton,
        KSelect
    },
    data() {
        return {
            showNotificationWindow: false,
            notificationOptions: [
                { label: '알림창', value: 'notification-window' },
                { label: '알림창', value: 'notification-window' },
            ]
        }
    }
}
</script>