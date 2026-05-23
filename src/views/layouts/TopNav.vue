<template>
    <div class="top-nav top-nav-friend">
        <div class="tnb_primary" v-if="$route.name === 'Profile'">
            <div class="page-title">친구</div>
        </div>
        <div class="tnb_primary" v-else-if="$route.name === 'ChatList'">
            <app-select type="text" placeholder="채팅">채팅</app-select> <!-- 클릭 시 옵션 노출-->
            <app-button type="text">오픈채팅</app-button> <!-- 클릭 시 오픈 채팅 리스트로 이동-->
        </div>
        <div class="tnb_primary" v-else-if="$route.name === 'More'">
            <div class="page-title">더보기</div>
        </div>
        <div class="btn-wrap" v-if="$route.name !== 'More'">
            <app-button type="icon" :button-size="36">
                <Icon24SearchWhite :width="24" :height="24" />
            </app-button>
            <app-button type="icon" :button-size="36">
                <Icon24FriendAddWhite :width="24" :height="24" />
            </app-button>
        </div>
    </div>
</template>
<script>
import AppButton from '@/components/ui/AppButton.vue'
import AppSelect from '@/components/ui/AppSelect.vue'
import Icon24SearchWhite from '@/assets/icons/24/ic-search-white.svg'
import Icon24FriendAddWhite from '@/assets/icons/24/ic-friend-add-white.svg'

export default {
    name: 'TopNav',
    components: {
        AppButton,
        AppSelect,
        Icon24SearchWhite,
        Icon24FriendAddWhite
    }
}
</script>