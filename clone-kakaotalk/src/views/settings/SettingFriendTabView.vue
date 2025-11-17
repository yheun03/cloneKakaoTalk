<template>
    <div class="setting-friend-tab">
        <dl class="wrap-setting">
            <dt>
                <KCheckbox v-model="showKeywordNotification">키워드 알림</KCheckbox>
            </dt>
            <dd>
                <p class="wrap-setting-description">등록된 키워드가 포함된 메시지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다. Mac에서 등록한 키워드는 모바일과 동기화 됩니다.</p>
                <KButton>키워드 편집</KButton>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt><p class="wrap-setting-title">친구 보기 설정</p></dt>
            <dd>
                <KCheckbox v-model="showKeywordNotification">생일인 친구 보기</KCheckbox>
                <p class="wrap-setting-description">친구 목록에서 친구의 생일 정보를 보여줍니다.</p>
            </dd>
            <dd>
                <KCheckbox v-model="showKeywordNotification">업데이트한 프로필 보기</KCheckbox>
                <p class="wrap-setting-description">친구 목록에서 프로필을 업데이트한 친구를 모아서 보여줍니다.</p>
            </dd>
        </dl>
    </div>
</template>
<script>
import KCheckbox from '@/components/ui/Checkbox.vue'
import KButton from '@/components/ui/Button.vue'
export default {
    name: 'SettingFriendTabView',
    components: {
        KCheckbox,
        KButton
    },
    data() {
        return {
            showKeywordNotification: false
        }
    }
}
</script>