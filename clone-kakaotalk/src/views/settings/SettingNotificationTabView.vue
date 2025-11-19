<template>
    <div class="setting-notification-tab">
        <dl class="wrap-setting">
            <dt>
                <KCheckbox v-model="showNotificationWindow">알림창</KCheckbox>
            </dt>
            <dd>
                <div class="wrap-input">
                    <span class="label-select">알림내용</span>
                    <KSelect :options="fontOptions" />
                </div>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <KCheckbox v-model="showKeywordNotification">키워드 알림</KCheckbox>
            </dt>
            <dd>
                <p class="dscpt">등록된 키워드가 포함된 메시지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다. Mac에서 등록한 키워드는 모바일과 동기화 됩니다.</p>
                <div class="wrap-input">
                    <KButton>키워드 편집</KButton>
                </div>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <KCheckbox v-model="showKeywordNotification">답장 메시지 알림</KCheckbox>
            </dt>
            <dd>
                <p class="dscpt">내가 전송한 메시지에 답장이 달리면 채팅방 알림이 꺼져있어도 알림을 받을 수 있습니다.</p>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <KCheckbox v-model="showNotificationWindow">멘션 알림</KCheckbox>
            </dt>
            <dd>
                <div class="wrap-input">
                    <span class="label-select">적용 범위</span>
                    <KSelect :options="notificationOptions" />
                </div>
                <p class="dscpt">나를 멘션한 메시지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다.</p>
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