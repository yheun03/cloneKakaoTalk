<template>
    <div class="view-container view-type-main view-chat-list">
        <global-nav />
        <top-nav />
        <div class="view-container-body">
            <ChattingCard
                v-for="chat in chats"
                :key="chat.userId"
                :userId="chat.userId"
                :src="chat.src"
                :chattingName="chat.chattingName"
                :headcount="chat.headcount"
                :lastMessage="chat.lastMessage"
                :lastMessageTime="chat.lastMessageTime"
                :unreadCount="chat.unreadCount"
                :isPin="chat.isPin"
                :isSilent="chat.isSilent"
            />
        </div>
    </div>
</template>
<script>
import GlobalNav from '@/views/layouts/GlobalNav.vue'
import TopNav from '@/views/layouts/TopNav.vue'
import ChattingCard from '@/components/chat/ChattingCard.vue'
import chatService from '@/services/chatService'
export default {
    name: 'ChatListView',
    components: {
        GlobalNav,
        TopNav,
        ChattingCard
    },
    computed: {
        chats() {
            return chatService
                .getChatList()
                .filter(Boolean)
                .sort((a, b) => {
                    // 1) 상단 고정 우선
                    if (a.isPin && !b.isPin) return -1
                    if (!a.isPin && b.isPin) return 1
                    // 2) 최신 메시지 시간순 (최근 먼저)
                    const ta = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0
                    const tb = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0
                    return tb - ta
                })
        }
    }
}
</script>