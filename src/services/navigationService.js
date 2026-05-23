import router from '@/router'
import { ROUTES } from '@/constants/routes'

/**
 * 라우터 네비게이션 공통 서비스
 * - 모든 라우터 이동을 중앙에서 관리
 */
function navigateTo(path, options = {}) {
    if (!path) {
        console.warn('navigationService: path가 제공되지 않았습니다.')
        return
    }

    const { replace = false, query = null } = options
    const routeConfig = { path }

    if (query) {
        routeConfig.query = query
    }

    const navigationMethod = replace ? router.replace : router.push
    
    return navigationMethod(routeConfig).catch((error) => {
        // 네비게이션 중복 에러는 무시
        if (error.name !== 'NavigationDuplicated') {
            console.error('navigationService: 네비게이션 실패', error)
        }
    })
}

/**
 * 프로필 페이지로 이동
 */
function goToProfile() {
    return navigateTo(ROUTES.PROFILE)
}

/**
 * 채팅 리스트 페이지로 이동
 */
function goToChatList() {
    return navigateTo(ROUTES.CHAT_LIST)
}

/**
 * 더보기 페이지로 이동
 */
function goToMore() {
    return navigateTo(ROUTES.MORE)
}

/**
 * 설정 페이지로 이동
 */
function goToSetting() {
    return navigateTo(ROUTES.SETTING)
}

/**
 * 홈(프로필)으로 이동
 */
function goToHome() {
    return navigateTo(ROUTES.PROFILE)
}

const navigationService = {
    navigateTo,
    goToProfile,
    goToChatList,
    goToMore,
    goToSetting,
    goToHome
}

export default navigationService

// Named exports도 제공 (일관성 유지)
export {
    navigateTo,
    goToProfile,
    goToChatList,
    goToMore,
    goToSetting,
    goToHome
}
