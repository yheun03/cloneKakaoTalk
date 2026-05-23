<template>
    <div class="view-container view-type-main view-more">
        <global-nav />
        <top-nav />
        <div class="view-container-body">
            <div class="user-card">
                <div>
                    <p class="user-card-name">홍길동</p>
                    <p class="user-card-email">honggildong@example.com</p>
                </div>
                <div>
                    <app-button type="icon">
                        <Icon30Security :width="30" :height="30" />
                    </app-button>
                </div>
            </div>
            <div class="anchor-list">
                <a class="anchor-item" href="https://www.daum.net" target="_blank">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">다음</p>
                </a>
                <a class="anchor-item" href="https://account.mail.kakao.com/" target="_blank">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">메일</p>
                </a>
                <a class="anchor-item" href="https://calendar.kakao.com/" target="_blank">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">캘린더</p>
                </a>
                <a class="anchor-item" onclick="openTalkBox()">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">톡서랍</p>
                </a>
                <a class="anchor-item" href="https://e.kakao.com/">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">이모티콘</p>
                </a>
                <a class="anchor-item" href="https://gift.kakao.com/">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">선물하기</p>
                </a>
                <a class="anchor-item" href="https://store.kakao.com/">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">톡딜</p>
                </a>
                <a class="anchor-item" onclick="openTalkLab()">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">실험실</p>
                </a>
                <a class="anchor-item" href="https://pc.kakao.com/talk/notices">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">공지사항</p>
                </a>
                <a class="anchor-item" onclick="openSettings()">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">환경설정</p>
                </a>
                <a class="anchor-item" href="https://cs.kakao.com/">
                    <Icon24Daum :width="24" :height="24" />
                    <p class="anchor-item-title">도움말</p>
                </a>
            </div>

            <div class="info-kakaotalk">
                <div>
                    <app-button type="icon">
                        <Icon24Information :width="24" :height="24" />
                    </app-button>
                    <span>카카오톡 정보</span>
                </div>
                <p>ver. <span>3.9.0</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import GlobalNav from '@/views/layouts/GlobalNav.vue'
import TopNav from '@/views/layouts/TopNav.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Icon24Daum from '@/assets/icons/24/ic-daum.svg'
import Icon30Security from '@/assets/icons/30/ic-security.svg'
import Icon24Information from '@/assets/icons/24/ic-information.svg'
export default {
    name: 'MoreView',
    components: {
        GlobalNav,
        TopNav,
        AppButton,
        Icon24Daum,
        Icon30Security,
        Icon24Information
    }
}
</script>