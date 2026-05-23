<template>
    <div class="setting-notification-tab">
        <dl class="wrap-setting">
            <dt>
                <app-checkbox v-model="showNotificationWindow">알림창</app-checkbox>
            </dt>
            <dd>
                <div class="wrap-input">
                    <span class="label-select">알림내용</span>
                    <app-select :options="fontOptions" />
                </div>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <app-checkbox v-model="showKeywordNotification">키워드 알림</app-checkbox>
            </dt>
            <dd>
                <p class="dscpt">등록된 키워드가 포함된 메시지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다. Mac에서 등록한 키워드는 모바일과 동기화 됩니다.</p>
                <div class="wrap-input">
                    <app-button>키워드 편집</app-button>
                </div>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <app-checkbox v-model="showKeywordNotification">답장 메시지 알림</app-checkbox>
            </dt>
            <dd>
                <p class="dscpt">내가 전송한 메시지에 답장이 달리면 채팅방 알림이 꺼져있어도 알림을 받을 수 있습니다.</p>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <app-checkbox v-model="showNotificationWindow">멘션 알림</app-checkbox>
            </dt>
            <dd>
                <div class="wrap-input">
                    <span class="label-select">적용 범위</span>
                    <app-select :options="notificationOptions" />
                </div>
                <p class="dscpt">나를 멘션한 메시지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다.</p>
            </dd>
        </dl>
    </div>
</template>
<script>
import AppCheckbox from '@/components/ui/AppCheckbox.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppSelect from '@/components/ui/AppSelect.vue'
export default {
    name: 'SettingNotificationTabView',
    components: {
        AppCheckbox,
        AppButton,
        AppSelect
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