<template>
    <div class="setting-security-tab">
        <dl class="wrap-setting">
            <dt><p class="wrap-setting-title">자동 실행 & 자동 로그인</p></dt>
            <dd>
                <KCheckbox v-model="autoRun">Mac 시작시 자동 실행</KCheckbox>
                <KCheckbox v-model="autoLogin">실행 시 자동 로그인</KCheckbox>
                <KCheckbox v-model="autoLogin">잠금모드로 자동 로그인</KCheckbox>
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
export default {
    name: 'SettingSecurityTabView',
    components: {
        KCheckbox,
        KButton
    },
    data() {
        return {
            autoRun: false,
            autoLogin: false,
        }
    }
}
</script>