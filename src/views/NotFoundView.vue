<template>
    <div>
        <h1>404 Not Found</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <app-button @click="goToHome">홈으로 이동</app-button>
    </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue'
import navigationService from '@/services/navigationService'

export default {
    name: 'NotFoundView',
    components: {
        AppButton
    },
    methods: {
        goToHome() {
            navigationService.goToHome()
        }
    }
}
</script>