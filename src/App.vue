<template>
  <div class="app">
    <router-view />
    <ProfileModal
        v-if="showProfileModal"
        :userId="selectedProfileId"
        @close="closeProfileModal"
    />
  </div>
</template>

<script>
import ProfileModal from '@/components/modal/ProfileModal.vue'
import eventBus from '@/utils/eventBus'
import { EVENTS } from '@/constants/events'

export default {
  name: 'App',
  components: {
    ProfileModal
  },
  data() {
    return {
      showProfileModal: false,
      selectedProfileId: null
    }
  },
  mounted() {
    eventBus.on(EVENTS.OPEN_PROFILE_MODAL, this.handleOpenProfileModal)
  },
  beforeUnmount() {
    eventBus.off(EVENTS.OPEN_PROFILE_MODAL, this.handleOpenProfileModal)
  },
  methods: {
    handleOpenProfileModal(userId) {
      this.selectedProfileId = userId
      this.showProfileModal = true
    },
    closeProfileModal() {
      this.showProfileModal = false
      this.selectedProfileId = null
    }
  }
}
</script>

<style>
</style>
