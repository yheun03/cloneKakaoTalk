import profileService from './profileService'

// 간단한 인메모리 채팅 데이터
const chatStore = {
    'kim-minsu': {
        userId: 'kim-minsu',
        headcount: 1,
        isPin: true,
        isSilent: false,
        unreadCount: 1,
        messages: [
            { id: 'km-1', sender: 'other', type: 'text', message: '안녕하세요! 오랜만이에요 😊', timestamp: '2025-10-27T11:56:00' },
            { id: 'km-2', sender: 'me', type: 'text', message: '어, 안녕! 잘 지냈어?\n날씨 많이 추워졌지?', timestamp: '2025-10-27T11:57:00' },
            { id: 'km-3', sender: 'other', type: 'text', message: '응! 옷 따뜻하게 입고 다녀야겠더라구요 ㅎㅎ', timestamp: '2025-10-27T11:58:00' },
            { id: 'km-4', sender: 'other', type: 'image', imageSrc: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', timestamp: '2025-10-27T11:58:30' },
            { id: 'km-5', sender: 'me', type: 'text', message: '와 사진 진짜 잘 나왔다! 어디서 찍은 거에요?', timestamp: '2025-10-27T11:59:00' },
            { id: 'km-6', sender: 'other', type: 'text', message: '지난주에 남산 갔다가 찍었어요. 뷰가 너무 좋아서!', timestamp: '2025-10-27T12:00:00' },
            { id: 'km-7', sender: 'me', type: 'text', message: '부럽다 ㅎㅎ 나도 다음에 같이 가요!', timestamp: '2025-10-27T12:01:00' },
            { id: 'km-8', sender: 'other', type: 'file', message: '좋아요! 그리고 지난 번 프로젝트 파일도 공유드릴게요.', fileName: '프로젝트자료', filetype: 'jpg', fileUrl: 'https://yheun03.github.io/portfolio/src/assets/images/sample-photo-1.jpg', period: '2025-10-30', filesize: '4.5MB', timestamp: '2025-10-27T12:02:00' },
            { id: 'km-9', sender: 'me', type: 'text', message: '감사합니다! 덕분에 큰 도움 될 것 같아요 :)', timestamp: '2025-10-27T12:02:30' },
            { id: 'km-10', sender: 'me', type: 'text', message: '혹시 메신저에 파일 잘 올라가는지 확인 가능해요?', timestamp: '2025-10-27T12:03:00' },
            { id: 'km-11', sender: 'other', type: 'text', message: '네! 방금 전송한 자료 제대로 확인돼요!', timestamp: '2025-10-27T12:04:00' },
            { id: 'km-12', sender: 'me', type: 'text', message: '굿! 그리고 혹시 이번주 토요일 시간 괜찮으면 밥 같이 먹어요~', timestamp: '2025-10-27T12:04:30' },
            { id: 'km-13', sender: 'other', type: 'text', message: '좋습니다! 시간은 오후 6시쯤 어때요?', timestamp: '2025-10-27T12:05:00' },
            { id: 'km-14', sender: 'me', type: 'text', message: '네 완전 좋아요! 그날 봐요 😄', timestamp: '2025-10-27T12:06:00' },
            { id: 'km-15', sender: 'other', type: 'text', message: '알겠습니다~ 그럼 토요일에 봬요 🖐️', timestamp: '2025-10-27T12:07:00' }
        ]
    },
    'lee-jieun': {
        userId: 'lee-jieun',
        headcount: 1,
        isPin: false,
        isSilent: true,
        unreadCount: 0,
        messages: [
            { id: 'lj-1', sender: 'other', type: 'text', message: '프로젝트 문서 공유해요.', timestamp: '2025-10-26T09:30:00' },
            { id: 'lj-2', sender: 'me', type: 'text', message: '확인했어요. 덕분에 정리 끝!', timestamp: '2025-10-26T09:45:00' },
            { id: 'lj-3', sender: 'other', type: 'text', message: '이번 주중에 회의 한번 잡을까요?', timestamp: '2025-10-27T08:10:00' }
        ]
    },
    'park-seojun': {
        userId: 'park-seojun',
        headcount: 1,
        isPin: false,
        isSilent: true,
        unreadCount: 3,
        messages: [
            { id: 'ps-1', sender: 'other', type: 'text', message: '헬스장 등록했어요!', timestamp: '2025-10-24T18:20:00' },
            { id: 'ps-2', sender: 'me', type: 'text', message: '오 대박, 같이 운동해요!', timestamp: '2025-10-24T18:22:00' },
            { id: 'ps-3', sender: 'other', type: 'text', message: '내일 7시에 볼래요?', timestamp: '2025-10-27T07:05:00' }
        ]
    },
    'choi-sujin': {
        userId: 'choi-sujin',
        headcount: 3,
        isPin: true,
        isSilent: false,
        unreadCount: 0,
        messages: [
            { id: 'cs-1', sender: 'other', type: 'text', message: '주말에 모임 어때요?', timestamp: '2025-10-26T12:00:00' },
            { id: 'cs-2', sender: 'me', type: 'text', message: '좋아요! 장소만 정하면 될 듯!', timestamp: '2025-10-26T12:05:00' },
            { id: 'cs-3', sender: 'other', type: 'text', message: '홍대 쪽으로 갈까요?', timestamp: '2025-10-27T09:12:00' }
        ]
    },
    'jung-haneul': {
        userId: 'jung-haneul',
        headcount: 1,
        isPin: false,
        isSilent: false,
        unreadCount: 1,
        messages: [
            { id: 'jh-1', sender: 'other', type: 'text', message: '커피 마실래요?', timestamp: '2025-10-26T15:30:00' },
            { id: 'jh-2', sender: 'me', type: 'text', message: '오늘은 힘들 듯 ㅠㅠ', timestamp: '2025-10-26T15:34:00' }
        ]
    },
    'yoon-jihun': {
        userId: 'yoon-jihun',
        headcount: 5,
        isPin: false,
        isSilent: true,
        unreadCount: 3,
        messages: [
            { id: 'yj-1', sender: 'other', type: 'text', message: '시험 끝나서 너무 좋아!', timestamp: '2025-10-25T21:10:00' },
            { id: 'yj-2', sender: 'me', type: 'text', message: '고생했어 🎉', timestamp: '2025-10-25T21:15:00' }
        ]
    },
    'kang-minji': {
        userId: 'kang-minji',
        headcount: 1,
        isPin: false,
        isSilent: false,
        unreadCount: 2,
        messages: [
            { id: 'kmj-1', sender: 'other', type: 'text', message: '고양이 사진 봤어요?', timestamp: '2025-10-24T10:00:00' },
            { id: 'kmj-2', sender: 'other', type: 'image', imageSrc: 'https://images.pexels.com/photos/1401344/pexels-photo-1401344.jpeg?auto=compress&w=512&q=80', timestamp: '2025-10-24T10:01:00' },
            { id: 'kmj-3', sender: 'me', type: 'text', message: '너무 귀엽다 😍', timestamp: '2025-10-24T10:05:00' }
        ]
    },
    'song-hyunwoo': {
        userId: 'song-hyunwoo',
        headcount: 1,
        isPin: true,
        isSilent: true,
        unreadCount: 0,
        messages: [
            { id: 'sh-1', sender: 'other', type: 'text', message: '헬스장 루틴 공유해요.', timestamp: '2025-10-23T07:40:00' },
            { id: 'sh-2', sender: 'me', type: 'text', message: '감사! 오늘 바로 해볼게요.', timestamp: '2025-10-23T07:44:00' }
        ]
    },
    'han-soyoung': {
        userId: 'han-soyoung',
        headcount: 2,
        isPin: false,
        isSilent: false,
        unreadCount: 0,
        messages: [
            { id: 'hs-1', sender: 'other', type: 'text', message: '요즘 바쁘다 ㅠㅠ', timestamp: '2025-10-22T20:00:00' },
            { id: 'hs-2', sender: 'me', type: 'text', message: '힘내요! 주말엔 쉬어요.', timestamp: '2025-10-22T20:05:00' }
        ]
    },
    'cho-sungmin': {
        userId: 'cho-sungmin',
        headcount: 1,
        isPin: false,
        isSilent: false,
        unreadCount: 0,
        messages: [
            { id: 'csm-1', sender: 'other', type: 'text', message: '오늘 날씨 좋다!', timestamp: '2025-10-21T11:00:00' }
        ]
    },
    'kim-daeun': {
        userId: 'kim-daeun',
        headcount: 1,
        isPin: false,
        isSilent: false,
        unreadCount: 1,
        messages: [
            { id: 'kde-1', sender: 'other', type: 'text', message: '주말에 영화 볼래요?', timestamp: '2025-10-27T10:12:00' }
        ]
    },
    'park-minji': {
        userId: 'park-minji',
        headcount: 6,
        isPin: false,
        isSilent: false,
        unreadCount: 4,
        messages: [
            { id: 'pmj-1', sender: 'other', type: 'text', message: '이번 모임 일정 다시 공유!', timestamp: '2025-10-26T19:10:00' },
            { id: 'pmj-2', sender: 'me', type: 'text', message: '확인했어요~', timestamp: '2025-10-26T19:14:00' }
        ]
    },
    'choi-jihun': {
        userId: 'choi-jihun',
        headcount: 1,
        isPin: false,
        isSilent: false,
        unreadCount: 1,
        messages: [
            { id: 'cjh-1', sender: 'other', type: 'text', message: '다음 주에 여행 가요!', timestamp: '2025-10-20T08:00:00' }
        ]
    },
    'jung-suyeon': {
        userId: 'jung-suyeon',
        headcount: 1,
        isPin: false,
        isSilent: false,
        unreadCount: 1,
        messages: [
            { id: 'jsy-1', sender: 'other', type: 'text', message: '좋아요!', timestamp: '2025-10-19T13:30:00' }
        ]
    },
    'han-jiwoo': {
        userId: 'han-jiwoo',
        headcount: 1,
        isPin: false,
        isSilent: false,
        unreadCount: 1,
        messages: [
            { id: 'hjw-1', sender: 'other', type: 'text', message: '기대된다!', timestamp: '2025-10-18T09:10:00' }
        ]
    }
}

const defaultChat = (userId) => ({
    userId,
    headcount: 1,
    isPin: false,
    isSilent: false,
    unreadCount: 0,
    messages: []
})

const chatService = {
    getChat(userId) {
        return chatStore[userId] ? { ...chatStore[userId] } : defaultChat(userId)
    },

    getMessages(userId) {
        const chat = this.getChat(userId)
        return chat.messages || []
    },

    getChatList() {
        return Object.keys(chatStore).map((userId) => {
            const chat = chatStore[userId]
            const profile = profileService.getProfile(userId) || {}
            const messages = chat.messages || []
            const lastMessage = messages[messages.length - 1]
            let lastMessageText = '대화가 없습니다'
            if (lastMessage) {
                if (lastMessage.message) {
                    lastMessageText = lastMessage.message
                } else if (lastMessage.type === 'image') {
                    lastMessageText = '[사진]'
                } else if (lastMessage.type === 'file') {
                    lastMessageText = lastMessage.fileName ? `[파일] ${lastMessage.fileName}` : '[파일]'
                }
            }
            const lastMessageTime = lastMessage?.timestamp || ''

            return {
                userId,
                src: profile.profileImage || '',
                chattingName: profile.userName || userId,
                headcount: chat.headcount || 1,
                lastMessage: lastMessageText,
                lastMessageTime,
                unreadCount: chat.unreadCount || 0,
                isPin: !!chat.isPin,
                isSilent: !!chat.isSilent
            }
        })
    }
}

export default chatService

