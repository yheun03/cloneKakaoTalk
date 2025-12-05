<template>
    <div class="chatting-card">
        <app-avatar :src="src" size="44" />
        <div class="chatting-card-info">
            <p class="c-name">{{ chattingName }} <span v-if="headcount > 1" class="c-headcount">{{ headcount }}</span> <app-icon icon="ic-pin" :icon-size="12" v-if="isPin" /> <app-icon icon="ic-silent" :icon-size="12" v-if="isSilent" /></p>
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
    import AppIcon from '@/components/ui/AppIcon.vue';
    export default {
        name: 'ChattingCard',
        components: {
            AppAvatar,
            AppIcon
        },
        props: {
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
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const messageDate = new Date(messageTime.getFullYear(), messageTime.getMonth(), messageTime.getDate());
                
                // 같은 날 (00시가 지나지 않음)
                if (messageDate.getTime() === today.getTime()) {
                    return messageTime.toLocaleTimeString('ko-KR', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: false 
                    });
                }
                
                // 같은 해
                if (messageTime.getFullYear() === now.getFullYear()) {
                    return `${messageTime.getMonth() + 1}월${messageTime.getDate()}일`;
                }
                
                // 다른 해
                return messageTime.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }).replace(/\./g, '. ').replace(/\s/g, '');
            }
        }
    }
</script>