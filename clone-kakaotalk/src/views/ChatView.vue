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
import chatService from '@/services/chatService'
import eventBus from '@/utils/eventBus'

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
            currentUserId: ''
        }
    },
    computed: {
        activeUserId() {
            return this.currentUserId
        },
        chatRoom() {
            return chatService.getChat(this.activeUserId)
        },
        otherProfile() {
            return profileService.getProfile(this.activeUserId) || {}
        },
        myProfile() {
            return profileService.getProfile(this.myUserId) || {}
        },
        headcount() {
            return this.chatRoom.headcount || 1
        },
        messages() {
            const source = this.chatRoom.messages || []
            return source.map(msg => {
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
    created() {
        this.syncActiveUserId()
        // 이벤트 버스로 userId 받기
        eventBus.on('navigate-to-chat', this.handleNavigateToChat)
    },
    mounted() {
        this.scrollToBottom()
        // 마운트 후에도 이벤트 버스에서 마지막 userId 확인 (이미 /chat에 있을 때 대비)
        this.$nextTick(() => {
            const lastUserId = eventBus.getLastValue('navigate-to-chat')
            if (lastUserId) {
                this.currentUserId = lastUserId
                this.scrollToBottom()
            }
        })
    },
    beforeUnmount() {
        eventBus.off('navigate-to-chat', this.handleNavigateToChat)
    },
    watch: {
        $route: {
            handler() {
                // URL 쿼리 파라미터는 더 이상 사용하지 않지만, 하위 호환성을 위해 유지
                this.syncActiveUserId()
            },
            deep: true
        }
    },
    methods: {
        syncActiveUserId() {
            // URL 쿼리 파라미터는 더 이상 사용하지 않지만, 하위 호환성을 위해 유지
            const query = this.$route?.query || {}
            let id = query.userId || query.userid

            // URLSearchParams (혹시라도 라우터 쿼리가 비어있는 경우 대비)
            if (!id && typeof window !== 'undefined') {
                const params = new URLSearchParams(window.location.search || '')
                id = params.get('userId') || params.get('userid')
            }

            // 쿼리 파라미터가 없으면 기본값 사용 (이벤트 버스로 받은 값이 있으면 그걸 사용)
            if (!id && !this.currentUserId) {
                this.currentUserId = 'kim-minsu'
            } else if (id) {
                this.currentUserId = id
            }
        },
        handleNavigateToChat(userId) {
            // 이벤트 버스로 받은 userId 설정
            if (userId) {
                this.currentUserId = userId
                this.$nextTick(() => {
                    this.scrollToBottom()
                })
            }
        },
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