<template>
    <div>
        <h1>404 Not Found</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <KButton @click="goToHome">홈으로 이동</KButton>
    </div>
</template>

<script>

import KButton from '@/components/ui/Button.vue'

export default {
    name: 'NotFoundView',
    components: {
        KButton
    },
    methods: {
        goToHome() {
            this.$router.push('/')
        }
    }
}
</script>