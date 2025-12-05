// 프로필 데이터 중앙 관리 서비스
const profiles = {
    // 1:1 채팅 프로필들
    'kim-minsu': {
        userName: '김민수',
        profileImage: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&w=512&q=80',
        userMessage: '오늘도 화이팅!',
        backgroundImage: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&w=1920&q=80', // 변경됨 (unsplash에서 pexels로, 404 방지)
        birthday: '1994-03-21'
    },
    'lee-jieun': {
        userName: '이지은',
        profileImage: 'https://images.pexels.com/photos/7338721/pexels-photo-7338721.jpeg?auto=compress&w=512&q=80',
        userMessage: '커피가 필요해 ☕️',
        backgroundImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=1920&q=80',
        birthday: '1996-04-10'
    },
    'park-seojun': {
        userName: '박서준',
        profileImage: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&w=512&q=80',
        userMessage: '출근 중...',
        backgroundImage: 'https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&w=1920&q=80',
        birthday: '1993-07-12'
    },
    'choi-sujin': {
        userName: '최수진',
        profileImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&w=512&q=80',
        userMessage: '운동 다녀왔어요 💪',
        backgroundImage: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&w=1920&q=80', // 변경 (unsplash 404 → pexels)
        birthday: '1995-02-16'
    },
    'jung-haneul': {
        userName: '정하늘',
        profileImage: 'https://images.pexels.com/photos/3775532/pexels-photo-3775532.jpeg?auto=compress&w=512&q=80',
        userMessage: '커피 한잔의 여유 ☕️',
        backgroundImage: 'https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?auto=compress&w=1920&q=80',
        birthday: '1992-09-27'
    },
    'yoon-jihun': {
        userName: '윤지훈',
        profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=512&q=80',
        userMessage: '시험 끝났다! 🎉',
        backgroundImage: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&w=1920&q=80', // 변경 (unsplash 404 → pexels)
        birthday: '1997-12-02'
    },
    'kang-minji': {
        userName: '강민지',
        profileImage: 'https://images.pexels.com/photos/1401348/pexels-photo-1401348.jpeg?auto=compress&w=512&q=80',
        userMessage: '고양이랑 놀기 🐱',
        backgroundImage: 'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?auto=compress&w=1920&q=80',
        birthday: '1996-11-18'
    },
    'song-hyunwoo': {
        userName: '송현우',
        profileImage: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&w=512&q=80',
        userMessage: '헬스장 도착 💪',
        backgroundImage: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&w=1920&q=80',
        birthday: '1994-06-08'
    },
    'han-soyoung': {
        userName: '한소영',
        profileImage: 'https://images.pexels.com/photos/1452422/pexels-photo-1452422.jpeg?auto=compress&w=512&q=80',
        userMessage: '요즘 너무 바쁘다 😵',
        backgroundImage: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&w=1920&q=80',
        birthday: '1995-10-30'
    },
    'cho-sungmin': {
        userName: '조성민',
        profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&w=512&q=80',
        userMessage: '하늘 예쁘다 🌈',
        backgroundImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=1920&q=80',
        birthday: '1992-01-14'
    },
    'kim-daeun': {
        userName: '김다은',
        profileImage: 'https://images.pexels.com/photos/21294/pexels-photo.jpg?auto=compress&w=512&q=80',
        userMessage: '좋은 하루 되세요!',
        backgroundImage: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&w=1920&q=80', // 변경 (unsplash 404 → pexels)
        birthday: '1998-08-09'
    },
    // 그룹 채팅 참여자들
    'kim-appa': {
        userName: '김아빠',
        profileImage: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&w=512&q=80',
        userMessage: '날씨 너무 좋다 🌤️',
        backgroundImage: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&w=1920&q=80',
        birthday: '1967-05-05'
    },
    'kim-eomma': {
        userName: '김엄마',
        profileImage: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&w=512&q=80',
        userMessage: '오늘 저녁 뭐 먹지?',
        backgroundImage: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&w=1920&q=80',
        birthday: '1969-10-22'
    },
    'kim-ddal': {
        userName: '김딸',
        profileImage: 'https://images.pexels.com/photos/3795271/pexels-photo-3795271.jpeg?auto=compress&w=512&q=80',
        userMessage: '학교 끝났어요!',
        backgroundImage: 'https://images.pexels.com/photos/984278/pexels-photo-984278.jpeg?auto=compress&w=1920&q=80',
        birthday: '2005-07-17'
    },
    'lee-donghyun': {
        userName: '이동현',
        profileImage: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=512&q=80',
        userMessage: '드라마 정주행 중 🎬',
        backgroundImage: 'https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?auto=compress&w=1920&q=80',
        birthday: '1988-12-01'
    },
    'park-minji': {
        userName: '박민지',
        profileImage: 'https://images.pexels.com/photos/1130912/pexels-photo-1130912.jpeg?auto=compress&w=512&q=80',
        userMessage: '오늘 모임 언제야?',
        backgroundImage: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&w=1920&q=80',
        birthday: '1997-02-24'
    },
    'choi-jihun': {
        userName: '최지훈',
        profileImage: 'https://images.pexels.com/photos/3771061/pexels-photo-3771061.jpeg?auto=compress&w=512&q=80',
        userMessage: '나도 참여할게!',
        backgroundImage: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&w=1920&q=80',
        birthday: '1989-05-11'
    },
    'jung-suyeon': {
        userName: '정수연',
        profileImage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&w=512&q=80',
        userMessage: '좋아요!',
        backgroundImage: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&w=1920&q=80',
        birthday: '1998-03-29'
    },
    'han-jiwoo': {
        userName: '한지우',
        profileImage: 'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&w=512&q=80',
        userMessage: '기대돼요',
        backgroundImage: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&w=1920&q=80', // 변경 (unsplash 404 → pexels)
        birthday: '2000-10-02'
    },
    'kim-minho': {
        userName: '김민호',
        profileImage: 'https://images.pexels.com/photos/6148102/pexels-photo-6148102.jpeg?auto=compress&w=512&q=80',
        userMessage: '새 프로젝트 시작!',
        backgroundImage: 'https://images.pexels.com/photos/187930/pexels-photo-187930.jpeg?auto=compress&w=1920&q=80',
        birthday: '1995-04-23'
    },
    'lee-seoyeon': {
        userName: '이서연',
        profileImage: 'https://images.pexels.com/photos/3913246/pexels-photo-3913246.jpeg?auto=compress&w=512&q=80',
        userMessage: '응원할게!',
        backgroundImage: 'https://images.pexels.com/photos/1845116/pexels-photo-1845116.jpeg?auto=compress&w=1920&q=80',
        birthday: '1994-08-30'
    },
    'park-daehyun': {
        userName: '박대현',
        profileImage: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=512&q=80',
        userMessage: '내일 여행 간다 ✈️',
        backgroundImage: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&w=1920&q=80', // 변경 (unsplash 404 → pexels)
        birthday: '1993-06-15'
    },
    'choi-younghee': {
        userName: '최영희',
        profileImage: 'https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&w=512&q=80',
        userMessage: '부럽다!',
        backgroundImage: 'https://images.pexels.com/photos/1401345/pexels-photo-1401345.jpeg?auto=compress&w=1920&q=80',
        birthday: '1991-02-27'
    },
    'lee-junho': {
        userName: '이준호',
        profileImage: 'https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg?auto=compress&w=512&q=80',
        userMessage: '사진 많이 찍어와',
        backgroundImage: 'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&w=1920&q=80',
        birthday: '1990-07-19'
    },
    'jung-miyoung': {
        userName: '정미영',
        profileImage: 'https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&w=512&q=80',
        userMessage: '즐거운 여행 되세요',
        backgroundImage: 'https://images.pexels.com/photos/1291057/pexels-photo-1291057.jpeg?auto=compress&w=1920&q=80',
        birthday: '1990-12-09'
    },
    'han-jihun': {
        userName: '한지훈',
        profileImage: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=512&q=80',
        userMessage: '나도 가고 싶어',
        backgroundImage: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&w=1920&q=80',
        birthday: '1992-11-03'
    },
    'kim-sujin': {
        userName: '김수진',
        profileImage: 'https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&w=512&q=80',
        userMessage: '다음엔 같이 가요',
        backgroundImage: 'https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?auto=compress&w=1920&q=80',
        birthday: '1998-05-27'
    },
    // 내 프로필
    'eyh': {
        userName: '은영환',
        profileImage: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp',
        userMessage: '해외여행 가고 싶다!!!!',
        backgroundImage: 'chrome-untrusted://new-tab-page/custom_background_image?url=chrome-untrusted%3A%2F%2Fnew-tab-page%2Fbackground.jpg%3Fts%3D1764568289',
        birthday: '1995-09-15'
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

