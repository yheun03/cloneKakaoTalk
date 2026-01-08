<template>
    <div class="chatting-card" @click="goToChat">
        <app-avatar
            :userId="userId"
            :src="src"
            size="44"
            @click.stop
        />
        <div class="chatting-card-info">
            <p class="c-name">{{ chattingName }} <span v-if="headcount > 1" class="c-headcount">{{ headcount }}</span> <Icon12Pin v-if="isPin" :width="12" :height="12" /> <Icon12Silent v-if="isSilent" :width="12" :height="12" /></p>
            <p class="c-message" v-text="lastMessage"></p>
        </div>
        <div class="chatting-card-info-time">
            <span class="c-time">{{ formattedLastMessageTime }}</span>
            <span class="c-unread"><span v-if="unreadCount > 0">{{ unreadCount }}</span></span>
        </div>
    </div>
</template>
<script>
    import AppAvatar from '@/components/ui/AppAvatar.vue';
    import Icon12Pin from '@/assets/icons/12/ic-pin.svg';
    import Icon12Silent from '@/assets/icons/12/ic-silent.svg';
    import eventBus from '@/utils/eventBus';
    export default {
        name: 'ChattingCard',
        components: {
            AppAvatar,
            Icon12Pin,
            Icon12Silent
        },
        props: {
            userId: {
                type: String,
                default: ''
            },
            src: {
                type: String,
                default: ''
            },
            chattingName: {
                type: String,
                default: ''
            },
            lastMessage: {
                type: String,
                default: ''
            },
            headcount: {
                type: Number,
                default: 1
            },
            lastMessageTime: {
                type: [String, Date],
                default: ''
            },
            unreadCount: {
                type: Number,
                default: 0
            },
            isPin: {
                type: Boolean,
                default: false
            },
            isSilent: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            formattedLastMessageTime() {
                if (!this.lastMessageTime) return '';

                const messageTime = new Date(this.lastMessageTime);
                if (isNaN(messageTime)) return '';

                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const messageDate = new Date(messageTime.getFullYear(), messageTime.getMonth(), messageTime.getDate());
                const diffDays = Math.floor((today.getTime() - messageDate.getTime()) / (1000 * 60 * 60 * 24));

                // 오늘: 시:분 (24시간제)
                if (diffDays === 0) {
                    return messageTime.toLocaleTimeString('ko-KR', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    });
                }

                // 어제
                if (diffDays === 1) {
                    return '어제';
                }

                // 그제 이전: YYYY.MM.DD
                return messageTime
                    .toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    })
                    .replace(/\.\s?/g, '.')
                    .replace(/\.$/, '');
            }
        },
        methods: {
            goToChat() {
                // 이벤트 버스로 userId 전달 (URL 파라미터 없이)
                if (this.userId) {
                    eventBus.emit('navigate-to-chat', this.userId)
                }
                
                // 라우터 이동 (쿼리 파라미터 없이)
                if (this.$route.path === '/chat') {
                    this.$router.replace('/chat')
                } else {
                    this.$router.push('/chat')
                }
            }
        }
    }
</script>