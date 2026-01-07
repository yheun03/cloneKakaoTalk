import profileService from './profileService'

// 간단한 인메모리 채팅 데이터
const chatStore = {
    'kim-minsu': {
        userId: 'kim-minsu',
        headcount: 1,
        isPin: true,
        isSilent: false,
        unreadCount: 2,
        messages: [
            { id: 'km-1', sender: 'other', type: 'text', message: '야 오늘 퇴근 후에 뭐해?', timestamp: '2025-10-27T18:01:00' },
            { id: 'km-2', sender: 'me', type: 'text', message: '아직 계획 없는데 왜? 👀', timestamp: '2025-10-27T18:02:10' },
            { id: 'km-3', sender: 'other', type: 'text', message: '회사 앞에 새로 생긴 라멘집 가볼래? 줄 엄청 길더라.', timestamp: '2025-10-27T18:03:30' },
            { id: 'km-4', sender: 'me', type: 'text', message: '좋지! 근데 비 오면 줄에서 버티기 힘들 듯 ㅋㅋ', timestamp: '2025-10-27T18:04:10' },
            { id: 'km-5', sender: 'other', type: 'image', imageSrc: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', timestamp: '2025-10-27T18:05:20' },
            { id: 'km-6', sender: 'other', type: 'text', message: '방금 지나가다 찍었는데 사람 진짜 많음...', timestamp: '2025-10-27T18:05:50' },
            { id: 'km-7', sender: 'me', type: 'text', message: '헐 맛집 각이네 🤤 한 7시쯤 만나서 줄 서볼까?', timestamp: '2025-10-27T18:06:30' },
            { id: 'km-8', sender: 'other', type: 'file', message: '참고로 메뉴판도 보내줄게.', fileName: 'menu.pdf', filetype: 'pdf', fileUrl: 'https://example.com/menu.pdf', period: '2025-11-01', filesize: '1.2MB', timestamp: '2025-10-27T18:07:00' },
            { id: 'km-9', sender: 'me', type: 'text', message: '오 친절하시네 ㅋㅋ 난 매운 라멘 먹어볼래.', timestamp: '2025-10-27T18:07:45' },
            { id: 'km-10', sender: 'other', type: 'text', message: '그럼 나도 같은 거 시켜서 비교해보자.', timestamp: '2025-10-27T18:08:20' },
            { id: 'km-11', sender: 'me', type: 'text', message: '오케이, 그럼 7시에 역 앞에서 보는 걸로~', timestamp: '2025-10-27T18:09:05' },
            { id: 'km-12', sender: 'other', type: 'text', message: '늦지 말고 🙄', timestamp: '2025-10-27T18:09:40' },
            { id: 'km-13', sender: 'me', type: 'text', message: '지난번 30분 늦은 사람한테 그 말 듣기 싫은데요? ㅋㅋ', timestamp: '2025-10-27T18:10:15' },
            { id: 'km-14', sender: 'other', type: 'text', message: '이번엔 진짜 일찍 갈 거야… 아마도…', timestamp: '2025-10-27T18:11:00' },
            { id: 'km-15', sender: 'other', type: 'text', message: '아 그리고 끝나고 카페 가서 여행 일정도 같이 짜자!', timestamp: '2025-10-27T18:11:40' }
        ]
    },
    'lee-jieun': {
        userId: 'lee-jieun',
        headcount: 1,
        isPin: false,
        isSilent: true,
        unreadCount: 0,
        messages: [
            { id: 'lj-1', sender: 'other', type: 'text', message: '발표 자료 대충 다 만들었는데 한 번만 봐줄 수 있어요?', timestamp: '2025-10-26T09:30:00' },
            { id: 'lj-2', sender: 'me', type: 'file', message: '나도 수정한 버전 보내드릴게요.', fileName: 'presentation_v2.pptx', filetype: 'pptx', fileUrl: 'https://example.com/presentation_v2.pptx', period: '2025-10-30', filesize: '8.3MB', timestamp: '2025-10-26T09:35:00' },
            { id: 'lj-3', sender: 'me', type: 'text', message: '디자인만 조금 손봤고 내용은 거의 그대로에요.', timestamp: '2025-10-26T09:36:10' },
            { id: 'lj-4', sender: 'other', type: 'text', message: '와 색 조합 훨씬 보기 좋다… 역시 감성 장인 👍', timestamp: '2025-10-26T09:37:40' },
            { id: 'lj-5', sender: 'other', type: 'text', message: '발표 스크립트도 같이 연습해볼까요? 나 긴장 많이 해서…', timestamp: '2025-10-27T08:05:00' },
            { id: 'lj-6', sender: 'me', type: 'text', message: '좋아요. 오늘 오후에 30분 정도 시간 빼둘게요.', timestamp: '2025-10-27T08:07:20' },
            { id: 'lj-7', sender: 'other', type: 'text', message: '그럼 4시에 회의실 B에서 만나는 걸로!', timestamp: '2025-10-27T08:10:00' },

            { id: 'lj-8', sender: 'me', type: 'text', message: '발표 순서는 기존 안 그대로 가면 될 것 같아요.', timestamp: '2025-10-27T15:40:00' },
            { id: 'lj-9', sender: 'other', type: 'text', message: '네! 도입부 멘트만 조금 더 다듬어볼게요.', timestamp: '2025-10-27T15:42:10' },
            { id: 'lj-10', sender: 'me', type: 'text', message: '첫 슬라이드에서 문제 제기만 명확하면 좋아요.', timestamp: '2025-10-27T15:44:30' },
            { id: 'lj-11', sender: 'other', type: 'text', message: '아 그 부분이 좀 애매했죠… 다시 써볼게요.', timestamp: '2025-10-27T15:46:00' },
            { id: 'lj-12', sender: 'me', type: 'text', message: '뒤에 사례 슬라이드는 지금도 충분히 설득력 있어요.', timestamp: '2025-10-27T15:48:20' },
            { id: 'lj-13', sender: 'other', type: 'text', message: '다행이다 ㅠㅠ 거기 제일 걱정했어요.', timestamp: '2025-10-27T15:49:40' },
            { id: 'lj-14', sender: 'other', type: 'text', message: '발표 시간 7분 맞춰도 괜찮을까요?', timestamp: '2025-10-27T15:52:00' },
            { id: 'lj-15', sender: 'me', type: 'text', message: '네, 질의응답 생각하면 딱 좋아요.', timestamp: '2025-10-27T15:53:30' },
            { id: 'lj-16', sender: 'other', type: 'text', message: '그럼 그 기준으로 연습해볼게요.', timestamp: '2025-10-27T15:55:10' },
            { id: 'lj-17', sender: 'me', type: 'text', message: '목소리 톤만 지금보다 조금만 더 천천히 가면 좋아요.', timestamp: '2025-10-27T15:58:00' },
            { id: 'lj-18', sender: 'other', type: 'text', message: '알겠습니다… 연습 때는 괜찮았는데 실전이 문제네요 😭', timestamp: '2025-10-27T16:00:20' },

            { id: 'lj-19', sender: 'other', type: 'file', message: '수정한 버전 다시 공유드릴게요!', fileName: 'presentation_final.pptx', filetype: 'pptx', fileUrl: 'https://example.com/presentation_final.pptx', period: '2025-10-30', filesize: '8.7MB', timestamp: '2025-10-27T18:20:00' },
            { id: 'lj-20', sender: 'me', type: 'text', message: '확인해볼게요.', timestamp: '2025-10-27T18:21:30' },
            { id: 'lj-21', sender: 'me', type: 'text', message: '도입부 문장 훨씬 좋아졌어요.', timestamp: '2025-10-27T18:25:10' },
            { id: 'lj-22', sender: 'other', type: 'text', message: '휴… 그 말 들으니까 좀 살 것 같아요.', timestamp: '2025-10-27T18:26:40' },
            { id: 'lj-23', sender: 'me', type: 'text', message: '내일은 그냥 하던 대로만 하시면 돼요.', timestamp: '2025-10-27T18:28:00' },
            { id: 'lj-24', sender: 'other', type: 'text', message: '응원 감사합니다 진짜…', timestamp: '2025-10-27T18:29:30' },

            { id: 'lj-25', sender: 'other', type: 'text', message: '발표 끝났어요!!', timestamp: '2025-10-28T11:40:00' },
            { id: 'lj-26', sender: 'me', type: 'text', message: '오 고생하셨어요! 어떠셨어요?', timestamp: '2025-10-28T11:41:10' },
            { id: 'lj-27', sender: 'other', type: 'text', message: '생각보다 안 떨렸어요… 연습 효과가 있나 봐요.', timestamp: '2025-10-28T11:42:30' },
            { id: 'lj-28', sender: 'me', type: 'text', message: '그럴 줄 알았어요 👍', timestamp: '2025-10-28T11:43:20' },
            { id: 'lj-29', sender: 'other', type: 'text', message: '다 끝나고 나니까 이제야 숨 쉬는 느낌이에요.', timestamp: '2025-10-28T11:44:40' },
            { id: 'lj-30', sender: 'me', type: 'text', message: '오늘은 맛있는 거 드세요. 충분히 그럴 자격 있어요.', timestamp: '2025-10-28T11:46:00' }
        ]
    },
    'park-seojun': {
        userId: 'park-seojun',
        headcount: 1,
        isPin: false,
        isSilent: true,
        unreadCount: 3,
        messages: [
            { id: 'ps-1', sender: 'other', type: 'text', message: '헬스장 등록했어요! 드디어 결제함 💸', timestamp: '2025-10-24T18:20:00' },
            { id: 'ps-2', sender: 'me', type: 'text', message: 'ㅋㅋㅋㅋ 3일치만 가지 말고 꼭 한 달 채우기다?', timestamp: '2025-10-24T18:22:00' },
            { id: 'ps-3', sender: 'other', type: 'text', message: '이번엔 진짜 진심이야… PT도 끊었어.', timestamp: '2025-10-24T18:23:30' },
            { id: 'ps-4', sender: 'me', type: 'text', message: '와 PT까지? 그럼 몸 바뀌는 거 인증샷 기대함.', timestamp: '2025-10-24T18:25:00' },
            { id: 'ps-5', sender: 'other', type: 'image', imageSrc: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&w=512&q=80', timestamp: '2025-10-26T07:00:00' },
            { id: 'ps-6', sender: 'other', type: 'text', message: '오늘 첫 운동 다녀왔는데 벌써 다리 후들거림...', timestamp: '2025-10-26T07:01:10' },
            { id: 'ps-7', sender: 'me', type: 'text', message: '내일 계단 못 올라가는 거 아닌가요 😂', timestamp: '2025-10-26T07:02:40' },
            { id: 'ps-8', sender: 'other', type: 'text', message: '내일 7시에 볼래요? 같이 러닝 한 번 해요.', timestamp: '2025-10-27T07:05:00' }
        ]
    },
    'choi-sujin': {
        userId: 'choi-sujin',
        headcount: 3,
        isPin: true,
        isSilent: false,
        unreadCount: 0,
        messages: [
            { id: 'cs-1', sender: 'other', type: 'text', message: '주말에 모임 어때요? 거의 한 달 만인 듯 😂', timestamp: '2025-10-26T12:00:00' },
            { id: 'cs-2', sender: 'me', type: 'text', message: '좋아요! 다들 시간만 맞으면 어디든 상관없음.', timestamp: '2025-10-26T12:05:00' },
            { id: 'cs-3', sender: 'other', type: 'text', message: '홍대 쪽으로 갈까요? 거기 새로 생긴 파스타집 괜찮다던데.', timestamp: '2025-10-27T09:12:00' },
            { id: 'cs-4', sender: 'me', type: 'text', message: '존재만으로 이미 맛집 느낌인데? ㅋㅋ', timestamp: '2025-10-27T09:13:40' },
            { id: 'cs-5', sender: 'other', type: 'text', message: '시간은 5시 어때요? 너무 늦으면 사람 많을 것 같아서.', timestamp: '2025-10-27T09:15:10' },
            { id: 'cs-6', sender: 'me', type: 'text', message: '나 5시 가능! 나머지 두 명도 여기서 답해달라고 할게.', timestamp: '2025-10-27T09:16:25' }
        ]
    },
    'jung-haneul': {
        userId: 'jung-haneul',
        headcount: 1,
        isPin: false,
        isSilent: false,
        unreadCount: 1,
        messages: [
            { id: 'jh-1', sender: 'other', type: 'text', message: '커피 마실래요? 오늘 회의 너무 길었죠...', timestamp: '2025-10-26T15:30:00' },
            { id: 'jh-2', sender: 'me', type: 'text', message: '그러니까요 ㅠㅠ 아직 머리 멍함…', timestamp: '2025-10-26T15:32:10' },
            { id: 'jh-3', sender: 'me', type: 'text', message: '회사 앞 카페 말고 조금 더 조용한 데 갈까요?', timestamp: '2025-10-26T15:33:20' },
            { id: 'jh-4', sender: 'other', type: 'text', message: '좋아요! 지난번에 갔던 3층 카페 괜찮았는데 거기 갈까요?', timestamp: '2025-10-26T15:34:00' }
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

