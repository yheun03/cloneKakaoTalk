<template>
    <div class="setting-account-tab">
        <dl class="wrap-setting">
            <dt><p class="wrap-setting-title">계정 정보</p></dt>
            <dd>
                <div class="info-account">
                    <dl>
                        <dt>계정</dt>
                        <dd>{{ userEmail }}</dd>
                    </dl>
                    <dl>
                        <dt>ID</dt>
                        <dd>{{ userId }}</dd>
                    </dl>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    name: 'SettingAccountTabView',
    data() {
        return {
            userEmail: 'test@test.com',
            userId: 'test1234'
        }
    }
}
</script>