// 프로필 데이터 중앙 관리 서비스
const profiles = {
    // 1:1 채팅 프로필들
    'kim-minsu': {
        userName: '김민수',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '오늘도 화이팅!',
        backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
    },
    'lee-jieun': {
        userName: '이지은',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '커피가 필요해 ☕️',
        backgroundImage: '#51b38c'
    },
    'park-seojun': {
        userName: '박서준',
        profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '출근 중...',
        backgroundImage: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80'
    },
    'choi-sujin': {
        userName: '최수진',
        profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '운동 다녀왔어요 💪',
        backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
    },
    'jung-haneul': {
        userName: '정하늘',
        profileImage: 'https://images.unsplash.com/photo-1517363898873-fafc2070293c?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '커피 한잔의 여유 ☕️',
        backgroundImage: '#818a9b'
    },
    'yoon-jihun': {
        userName: '윤지훈',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '시험 끝났다! 🎉',
        backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    'kang-minji': {
        userName: '강민지',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '고양이랑 놀기 🐱',
        backgroundImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
    },
    'song-hyunwoo': {
        userName: '송현우',
        profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '헬스장 도착 💪',
        backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80'
    },
    'han-soyoung': {
        userName: '한소영',
        profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '요즘 너무 바쁘다 😵',
        backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
    },
    'cho-sungmin': {
        userName: '조성민',
        profileImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '하늘 예쁘다 🌈',
        backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80'
    },
    'kim-daeun': {
        userName: '김다은',
        profileImage: 'https://images.unsplash.com/photo-1517363898873-fafc2070293c?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '좋은 하루 되세요!',
        backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    // 그룹 채팅 참여자들
    'kim-appa': {
        userName: '김아빠',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '날씨 너무 좋다 🌤️',
        backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80'
    },
    'kim-eomma': {
        userName: '김엄마',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '오늘 저녁 뭐 먹지?',
        backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80'
    },
    'kim-ddal': {
        userName: '김딸',
        profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '학교 끝났어요!',
        backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80'
    },
    'lee-donghyun': {
        userName: '이동현',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '드라마 정주행 중 🎬',
        backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    'park-minji': {
        userName: '박민지',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '오늘 모임 언제야?',
        backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    'choi-jihun': {
        userName: '최지훈',
        profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '나도 참여할게!',
        backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    'jung-suyeon': {
        userName: '정수연',
        profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '좋아요!',
        backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    'han-jiwoo': {
        userName: '한지우',
        profileImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '기대돼요',
        backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    'kim-minho': {
        userName: '김민호',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '새 프로젝트 시작!',
        backgroundImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
    },
    'lee-seoyeon': {
        userName: '이서연',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '응원할게!',
        backgroundImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
    },
    'park-daehyun': {
        userName: '박대현',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '내일 여행 간다 ✈️',
        backgroundImage: '#393568'
    },
    'choi-younghee': {
        userName: '최영희',
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '부럽다!',
        backgroundImage: '#393568'
    },
    'lee-junho': {
        userName: '이준호',
        profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '사진 많이 찍어와',
        backgroundImage: '#393568'
    },
    'jung-miyoung': {
        userName: '정미영',
        profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '즐거운 여행 되세요',
        backgroundImage: '#393568'
    },
    'han-jihun': {
        userName: '한지훈',
        profileImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '나도 가고 싶어',
        backgroundImage: '#393568'
    },
    'kim-sujin': {
        userName: '김수진',
        profileImage: 'https://images.unsplash.com/photo-1517363898873-fafc2070293c?auto=format&fit=facearea&w=256&q=80&facepad=3',
        userMessage: '다음엔 같이 가요',
        backgroundImage: '#393568'
    },
    // 내 프로필
    'eyh': {
        userName: '은영환',
        profileImage: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp',
        userMessage: '해외여행 가고 싶다!!!!',
        backgroundImage: 'chrome-untrusted://new-tab-page/custom_background_image?url=chrome-untrusted%3A%2F%2Fnew-tab-page%2Fbackground.jpg%3Fts%3D1764568289'
    }
}

const profileService = {
    // userId로 프로필 정보 가져오기 (반환 시 userId 동적 추가)
    getProfile(userId) {
        const profile = profiles[userId]
        if (!profile) return null
        return { ...profile, userId }
    },
    
    // 여러 userId로 프로필 정보 가져오기
    getProfiles(userIds) {
        return userIds.map(userId => this.getProfile(userId)).filter(Boolean)
    },
    
    // 프로필 정보 업데이트
    updateProfile(userId, updates) {
        if (profiles[userId]) {
            profiles[userId] = { ...profiles[userId], ...updates }
            return { ...profiles[userId], userId }
        }
        return null
    },
    
    // 프로필 정보 추가
    addProfile(profile) {
        if (profile.userId) {
            // userId는 키로만 사용하고 객체 내부에는 저장하지 않음
            const { userId, ...profileData } = profile
            profiles[userId] = profileData
            return { ...profileData, userId }
        }
        return null
    },
    
    // 모든 프로필 가져오기 (각 프로필에 userId 동적 추가)
    getAllProfiles() {
        return Object.keys(profiles).map(userId => ({
            ...profiles[userId],
            userId
        }))
    }
}

export default profileService

