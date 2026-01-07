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
            return chatService.getChatList()
        }
    }
}
</script>