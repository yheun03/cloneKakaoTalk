<template>
    <div class="view-container view-type-main view-chat-list">
        <GlobalNav />
        <topNav />
        <div class="view-container-body">
            <ChattingCard v-for="chat in chats" :key="chat.id" :src="chat.src" :chattingName="chat.chattingName" :headcount="chat.headcount" :lastMessage="chat.lastMessage" :lastMessageTime="chat.lastMessageTime" :unreadCount="chat.unreadCount" :isPin="chat.isPin" :isSilent="chat.isSilent" />
        </div>
    </div>
</template>
<script>
import GlobalNav from '@/views/layouts/Gnb.vue'
import TopNav from '@/views/layouts/TopNav.vue'
import ChattingCard from '@/components/chat/ChattingCard.vue'
export default {
    name: 'ChatListView',
    components: {
        GlobalNav,
        TopNav,
        ChattingCard
    },
    data() {
        return {
            chats: [
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: true, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: false, isSilent: true},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 999, isPin: false, isSilent: true},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 3, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: true, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 5, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 3, isPin: false, isSilent: true},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 2, isPin: false, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: true, isSilent: true},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 2, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: false, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: false, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 6, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 4, isPin: false, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false},
                {src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', chattingName: '홍길동', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false},
            ]
        }
    }
}
</script>