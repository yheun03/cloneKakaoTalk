<template>
  <div class="component-view">
    <h1>컴포넌트 모음</h1>
    <h2>UI 컴포넌트</h2>
    <KButton>버튼</KButton>
    <KButton color="primary">버튼</KButton>
    <KButton disabled>버튼</KButton>
    <!-- 모든 컴포넌트들을 한 페이지에 표시 -->
      
  </div>
</template>

<script>
import KButton from '@/components/ui/Button.vue'
// import MainView from './MainView.vue'
// import ChatView from './ChatView.vue'

export default {
  name: 'ComponentView',
  components: {
    KButton
  }
//   components: {
//     MainView,
//     ChatView
//   }
}
</script>

<style lang="scss" scoped>
</style>
