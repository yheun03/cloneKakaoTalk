<template>
    <div class="setting-chat-tab">
        <dl class="wrap-setting">
            <dt>
                <p class="wrap-setting-title">대화 백업</p>
            </dt>
            <dd>
                <p class="wrap-setting-description">대화를 백업하여 카카오톡을 재설치할 때 복원할 수 있습니다. 대화는 텍스트만 백업됩니다.</p>
                <KButton>키워드 편집</KButton>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <p class="wrap-setting-title">채팅 옵션</p>
            </dt>
            <dd>
                <KCheckbox v-model="sendPictureAsAlbum">사진 전송시 묶어 보내기</KCheckbox>
                <p class="wrap-setting-description">최대 30장까지 하나의 말풍선으로 보낼 수 있습니다.</p>
            </dd>
            <dd>
                <KCheckbox v-model="showMouseOverMenu">마우스 오버 메뉴</KCheckbox>
                <p class="wrap-setting-description">말풍선에 마우스 커서를 올려서 공감 및 답장 기능을 사용할 수 있습니다.</p>
            </dd>
            <dd>
                <KCheckbox v-model="simpleReply">간편 답장</KCheckbox>
                <p class="wrap-setting-description">말풍선을 더블 클릭하여 답장 긴으을 사용할 수 있습니다.</p>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <p class="wrap-setting-title">채팅방 관리</p>
            </dt>
            <dd>
                <KCheckbox v-model="separateOpenChatList">오픈채팅 목록 분리</KCheckbox>
                <p class="wrap-setting-description">채팅방 목록에서 오픈채팅방 목록을 따로 분리해서 사용할 수 있습니다.</p>
            </dd>
        </dl>
    </div>
</template>
<script>
import KCheckbox from '@/components/ui/Checkbox.vue'
import KButton from '@/components/ui/Button.vue'
export default {
    name: 'SettingChatTabView',
    components: {
        KCheckbox,
        KButton
    },
}
</script>