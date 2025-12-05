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
            <app-button type="icon" icon="ic-search-white" :icon-size="24" :button-size="36"></app-button>
            <app-button type="icon" icon="ic-friend-add-white" :icon-size="24" :button-size="36"></app-button>
        </div>
    </div>
</template>
<script>
import AppButton from '@/components/ui/AppButton.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

export default {
    name: 'TopNav',
    components: {
        AppButton,
        AppSelect
    }
}
</script>