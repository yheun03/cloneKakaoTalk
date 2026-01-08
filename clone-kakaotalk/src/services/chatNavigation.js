import router from '@/router'
import eventBus from '@/utils/eventBus'

const CHAT_ROUTE_PATH = '/chat'

/**
 * 채팅 화면으로 이동하는 공통 함수
 * - URL 쿼리 파라미터는 사용하지 않고, eventBus로 userId 전달
 * - 이미 /chat 에 있는 경우에도 replace 로 다시 진입해 상태를 일관되게 유지
 */
export function openChat(userId) {
    const targetUserId = userId || ''

    // 1) userId 를 이벤트 버스로 전달 (ChatView 가 이 값을 사용)
    if (targetUserId) {
        eventBus.emit('navigate-to-chat', targetUserId)
    }

    // 2) 라우터 이동 (URL 에 파라미터 노출하지 않음)
    const current = router.currentRoute.value
    if (current && current.path === CHAT_ROUTE_PATH) {
        router.replace(CHAT_ROUTE_PATH).catch(() => {})
    } else {
        router.push(CHAT_ROUTE_PATH).catch(() => {})
    }
}

export default {
    openChat
}

