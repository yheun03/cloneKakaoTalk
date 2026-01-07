<!-- ChatView.vue -->
<template>
    <div class="view-container view-chat">
        <div class="view-chat-header">
            <app-avatar
                :size="40"
                :userId="activeUserId"
                :src="otherProfile.profileImage"
                :alt="`${otherProfile.userName || '상대방'} 프로필`"
            />
            <div class="chat-info">
                <p class="c-name">{{ otherProfile.userName || '상대방' }}</p>
                <p class="c-headcount"><i class="icon ic-profile"></i>{{ headcount }}</p>
            </div>
            <div class="btn-wrap">
                <app-button type="icon">
                    <Icon24Search :width="24" :height="24" />
                </app-button>
                <app-button type="icon">
                    <Icon24Menu :width="24" :height="24" />
                </app-button>
            </div>
        </div>
        <div class="view-chat-body" ref="chatBody">
            <div v-for="group in grouped" :key="group.key" class="chat-group"
                :class="group.sender === 'me' ? 'me' : 'other'">
                <!-- 상대가 보낸 그룹만 프로필/이름 노출 -->
                <div class="sender-info" v-if="group.sender === 'other'">
                    <app-avatar :size="40" :src="group.avatar" :alt="`${group.name} 프로필`" />
                    <p class="s-name">{{ group.name }}</p>
                </div>

                <div class="bubbles">
                    <ChatBubble v-for="(m, idx) in group.items" :key="m.id" :sender="m.sender" :type="m.type"
                        :message="m.message" :timestamp="m.timestamp" :src="m.imageSrc || m.avatar" :alt="m.alt || ''"
                        :filename="m.fileName" :filetype="m.filetype" :period="m.period" :filesize="m.filesize"
                        :showTail="idx === group.items.length - 1" :showTimestamp="idx === group.items.length - 1" />
                </div>
            </div>
        </div>
        <div class="view-chat-footer">
            <div class="input-wrap">
                <app-input type="textarea" placeholder="메시지를 입력하세요.">
                </app-input>
            </div>
            <div class="btn-wrap">
                <app-button type="icon">
                    <Icon24Emoji :width="24" :height="24" />
                </app-button>
                <app-button type="icon">
                    <Icon24File :width="24" :height="24" />
                </app-button>
                <app-button color="primary" @click="handleSend">전송</app-button>
            </div>
        </div>
    </div>
</template>
<script>
import AppAvatar from '@/components/ui/AppAvatar.vue'
import ChatBubble from '@/components/chat/ChatBubble.vue'
import AppInput from '@/components/ui/AppInput.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Icon24Search from '@/assets/icons/24/ic-search.svg'
import Icon24Menu from '@/assets/icons/24/ic-menu.svg'
import Icon24Emoji from '@/assets/icons/24/ic-emoji.svg'
import Icon24File from '@/assets/icons/24/ic-file.svg'
import profileService from '@/services/profileService'

const minuteKey = (iso) => {
    const d = new Date(iso);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${day} ${hh}:${mm}`;
};

export default {
    name: 'ChatView',
    components: {
        AppAvatar,
        ChatBubble,
        AppInput,
        AppButton,
        Icon24Search,
        Icon24Menu,
        Icon24Emoji,
        Icon24File
    },
    data() {
        return {
            myUserId: 'eyh',
            headcount: 1,
            rawMessages: [
                { id: 'm1', sender: 'other', type: 'text', message: '안녕하세요! 오랜만이에요 😊', timestamp: '2025-10-27T11:56:00' },
                { id: 'm2', sender: 'me', type: 'text', message: '어, 안녕! 잘 지냈어?\n날씨 많이 추워졌지?', timestamp: '2025-10-27T11:57:00' },
                { id: 'm3', sender: 'other', type: 'text', message: '응! 옷 따뜻하게 입고 다녀야겠더라구요 ㅎㅎ', timestamp: '2025-10-27T11:58:00' },
                { id: 'm4', sender: 'other', type: 'image', imageSrc: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', timestamp: '2025-10-27T11:58:30' },
                { id: 'm5', sender: 'me', type: 'text', message: '와 사진 진짜 잘 나왔다! 어디서 찍은 거에요?', timestamp: '2025-10-27T11:59:00' },
                { id: 'm6', sender: 'other', type: 'text', message: '지난주에 남산 갔다가 찍었어요. 뷰가 너무 좋아서!', timestamp: '2025-10-27T12:00:00' },
                { id: 'm7', sender: 'me', type: 'text', message: '부럽다 ㅎㅎ 나도 다음에 같이 가요!', timestamp: '2025-10-27T12:01:00' },
                { id: 'm8', sender: 'other', type: 'file', message: '좋아요! 그리고 지난 번 프로젝트 파일도 공유드릴게요.', fileName: '프로젝트자료', filetype: 'jpg', fileUrl: 'https://yheun03.github.io/portfolio/src/assets/images/sample-photo-1.jpg', period: '2025-10-30', filesize: '4.5MB', timestamp: '2025-10-27T12:02:00' },
                { id: 'm9', sender: 'me', type: 'text', message: '감사합니다! 덕분에 큰 도움 될 것 같아요 :)', timestamp: '2025-10-27T12:02:30' },
                { id: 'm10', sender: 'me', type: 'text', message: '혹시 메신저에 파일 잘 올라가는지 확인 가능해요?', timestamp: '2025-10-27T12:03:00' },
                { id: 'm11', sender: 'other', type: 'text', message: '네! 방금 전송한 자료 제대로 확인돼요!', timestamp: '2025-10-27T12:04:00' },
                { id: 'm12', sender: 'me', type: 'text', message: '굿! 그리고 혹시 이번주 토요일 시간 괜찮으면 밥 같이 먹어요~', timestamp: '2025-10-27T12:04:30' },
                { id: 'm13', sender: 'other', type: 'text', message: '좋습니다! 시간은 오후 6시쯤 어때요?', timestamp: '2025-10-27T12:05:00' },
                { id: 'm14', sender: 'me', type: 'text', message: '네 완전 좋아요! 그날 봐요 😄', timestamp: '2025-10-27T12:06:00' },
                { id: 'm15', sender: 'other', type: 'text', message: '알겠습니다~ 그럼 토요일에 봬요 🖐️', timestamp: '2025-10-27T12:07:00' },
            ]
        }
    },
    computed: {
        activeUserId() {
            const queryId = this.$route?.query?.userId
            return queryId || 'kim-minsu'
        },
        otherProfile() {
            return profileService.getProfile(this.activeUserId) || {}
        },
        myProfile() {
            return profileService.getProfile(this.myUserId) || {}
        },
        messages() {
            return this.rawMessages.map(msg => {
                const isOther = msg.sender === 'other'
                const profile = isOther ? this.otherProfile : this.myProfile
                return {
                    name: profile.userName || (isOther ? '상대방' : '나'),
                    avatar: profile.profileImage || msg.avatar,
                    ...msg
                }
            })
        },
        grouped() {
            const out = [];
            let cur = null;

            for (const msg of this.messages) {
                const key = `${msg.sender}|${minuteKey(msg.timestamp)}`;

                if (!cur || cur.key !== key) {
                    cur = {
                        key,
                        sender: msg.sender,
                        name: msg.name,
                        avatar: msg.avatar,
                        items: []
                    };
                    out.push(cur);
                }
                cur.items.push(msg);
            }
            return out;
        },

        timeStr() {
            // timestamp가 '2025-10-27T11:56:10' 일 때 "11:56"
            if (!this.timestamp) return '';
            const d = new Date(this.timestamp);
            const hh = String(d.getHours()).padStart(2, '0');
            const mm = String(d.getMinutes()).padStart(2, '0');
            return `${hh}:${mm}`;
        }
    },
    mounted() {
        this.scrollToBottom();
    },
    methods: {
        scrollToBottom() {
            this.$nextTick(() => {
                const chatBody = this.$refs.chatBody;
                if (chatBody) {
                    chatBody.scrollTop = chatBody.scrollHeight;
                }
            });
        },
        handleSend() {
            // 메시지 전송 로직
            console.log('메시지 전송');
        }
    },
    updated() {
        this.scrollToBottom();
    }
}
</script>