<template>
    <div class="top-nav top-nav-friend">
        <div class="tnb_primary" v-if="$route.name === 'Profile'">
            <div class="page-title">친구</div>
        </div>
        <div class="tnb_primary" v-else-if="$route.name === 'ChatList'">
            <KSelect type="text" placeholder="채팅">채팅</KSelect> <!-- 클릭 시 옵션 노출-->
            <KButton type="text">오픈채팅</KButton> <!-- 클릭 시 오픈 채팅 리스트로 이동-->
        </div>
        <div class="btn-wrap">
            <KButton type="icon" icon="ic-search-white" iconSize="24" buttonSize="36"></KButton>
            <KButton type="icon" icon="ic-friend-add-white" iconSize="24" buttonSize="36"></KButton>
        </div>
    </div>
</template>
<script>
import KButton from '@/components/ui/Button.vue'
import KSelect from '@/components/ui/Select.vue'

export default {
    name: 'topNav',
    components: {
        KButton,
        KSelect
    }
}
</script>