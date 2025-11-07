<template>
    <div class="view-container view-type-main view-more">
        <GlobalNav />
        <topNav />
        <div class="view-container-body">
            <div class="user-card">
                <div>
                    <p class="user-card-name">홍길동</p>
                    <p class="user-card-email">honggildong@example.com</p>
                </div>
                <div>
                    <KButton type="icon" icon="ic-security" iconSize="30" />
                </div>
            </div>
            <div class="anchor-list">
                <a class="anchor-item" href="https://www.daum.net" target="_blank">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">다음</p>
                </a>
                <a class="anchor-item" href="https://account.mail.kakao.com/" target="_blank">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">메일</p>
                </a>
                <a class="anchor-item" href="https://calendar.kakao.com/" target="_blank">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">캘린더</p>
                </a>
                <a class="anchor-item" onclick="openTalkBox()">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">톡서랍</p>
                </a>
                <a class="anchor-item" href="https://e.kakao.com/">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">이모티콘</p>
                </a>
                <a class="anchor-item" href="https://gift.kakao.com/">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">선물하기</p>
                </a>
                <a class="anchor-item" href="https://store.kakao.com/">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">톡딜</p>
                </a>
                <a class="anchor-item" onclick="openTalkLab()">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">실험실</p>
                </a>
                <a class="anchor-item" href="https://pc.kakao.com/talk/notices">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">공지사항</p>
                </a>
                <a class="anchor-item" onclick="openSettings()">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">환경설정</p>
                </a>
                <a class="anchor-item" href="https://cs.kakao.com/">
                    <KIcon icon="ic-daum" iconSize="24" />
                    <p class="anchor-item-title">도움말</p>
                </a>
            </div>

            <div class="info-kakaotalk">
                <div>
                    <KButton type="icon" icon="ic-information" iconSize="24"></KButton>
                    <span>카카오톡 정보</span>
                </div>
                <p>ver. <span>3.9.0</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import GlobalNav from '@/views/layouts/Gnb.vue'
import TopNav from '@/views/layouts/TopNav.vue'
import KIcon from '@/components/ui/Icon.vue'
import KButton from '@/components/ui/Button.vue'
export default {
    name: 'MoreView',
    components: {
        GlobalNav,
        TopNav,
        KIcon,
        KButton
    }
}
</script>