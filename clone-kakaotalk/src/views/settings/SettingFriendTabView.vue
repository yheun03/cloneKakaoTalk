<template>
    <div class="setting-friend-tab">
        <dl class="wrap-setting">
            <dt>
                <p class="title">친구 관리</p>
            </dt>
            <dd>
                <p class="dscpt">숨김 / 차단된 친구 목록을 관리할 수 있습니다.</p>
                <div class="wrap-input">
                    <app-button>목록 보기</app-button>
                </div>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <p class="title">친구 보기 설정</p>
            </dt>
            <dd>
                <div class="wrap-input">
                    <app-checkbox v-model="showKeywordNotification">생일인 친구 보기</app-checkbox>
                </div>
                <p class="dscpt">친구 목록에서 친구의 생일 정보를 보여줍니다.</p>
            </dd>
            <dd>
                <div class="wrap-input">
                    <app-checkbox v-model="showKeywordNotification">업데이트한 프로필 보기</app-checkbox>
                </div>
                <p class="dscpt">친구 목록에서 프로필을 업데이트한 친구를 모아서 보여줍니다.</p>
            </dd>
        </dl>
    </div>
</template>
<script>
import AppCheckbox from '@/components/ui/AppCheckbox.vue'
import AppButton from '@/components/ui/AppButton.vue'
export default {
    name: 'SettingFriendTabView',
    components: {
        AppCheckbox,
        AppButton
    },
    data() {
        return {
            showKeywordNotification: false
        }
    }
}
</script>