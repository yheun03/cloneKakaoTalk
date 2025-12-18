<template>
    <div class="setting-security-tab">
        <dl class="wrap-setting">
            <dt>
                <p class="title">자동 실행 & 자동 로그인</p>
            </dt>
            <dd>
                <div class="wrap-input type-column">
                    <app-checkbox v-model="autoRun">Mac 시작시 자동 실행</app-checkbox>
                    <app-checkbox v-model="autoLogin">실행 시 자동 로그인</app-checkbox>
                    <app-checkbox v-model="autoLogin">잠금모드로 자동 로그인</app-checkbox>
                </div>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <p class="title">PC 인증 해제</p>
            </dt>
            <dd>
                <p class="dscpt">사용하는 PC가 변경되었거나 도용이 의심되는 경우 PC 인증을 해제한 후 다시 인증을 받을 수 있습니다.</p>
                <div class="wrap-input">
                    <app-button>PC 인증 해제</app-button>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
import AppCheckbox from '@/components/ui/AppCheckbox.vue'
import AppButton from '@/components/ui/AppButton.vue'
export default {
    name: 'SettingSecurityTabView',
    components: {
        AppCheckbox,
        AppButton
    },
    data() {
        return {
            autoRun: false,
            autoLogin: false,
        }
    }
}
</script>