<template>
    <div class="gnb">
        <div class="gnb-top">
            <KButton type="icon" icon="ic-profile" iconSize="32" buttonSize="48"></KButton>
            <KButton type="icon" icon="ic-chat" iconSize="32" buttonSize="48"></KButton>
            <KButton type="icon" icon="ic-more" iconSize="32" buttonSize="48"></KButton>
        </div>
        <div class="gnb-bottom">
            <KButton type="icon" icon="ic-bell" iconSize="24" buttonSize="24"></KButton>
            <KButton type="icon" icon="ic-setting" iconSize="24" buttonSize="24"></KButton>
        </div>
    </div>
</template>
<script>
import KButton from '@/components/ui/Button.vue'

export default {
    name: 'GlobalNav',
    components: {
        KButton
    }
}
</script>