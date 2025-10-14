<template>
    <div>
        <KButton @click="goTo('Component')">커스텀 페이지로 이동</KButton>
    </div>
</template>
  
<script>
    import KButton from '@/components/ui/Button.vue'
    export default {
        name: 'MainView',
        components: {
            KButton
        },
        methods: {
            goTo(name) {
                this.$router.push(`/${name}`)
            }
        }
    }
</script>