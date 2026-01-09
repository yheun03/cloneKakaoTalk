import eventBus from '@/utils/eventBus'

/**
 * 프로필 모달을 여는 공통 서비스
 * @param {string} userId - 프로필을 표시할 사용자 ID
 */
function openProfileModal(userId) {
    if (!userId) {
        console.warn('profileModalService: userId가 제공되지 않았습니다.')
        return
    }
    
    // 이벤트 버스를 통해 프로필 모달 열기
    eventBus.emit('open-profile-modal', userId)
}

const profileModalService = {
    openProfileModal
}

export default profileModalService
