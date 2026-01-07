<template>
    <div class="view-container view-type-main view-chat-list">
        <global-nav />
        <top-nav />
        <div class="view-container-body">
            <ChattingCard
                v-for="chat in chats"
                :key="chat.id"
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
                { userId: 'kim-minsu', src: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&w=512&q=80', chattingName: '김민수', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: true, isSilent: false },
                { userId: 'lee-jieun', src: 'https://images.pexels.com/photos/7338721/pexels-photo-7338721.jpeg?auto=compress&w=512&q=80', chattingName: '이지은', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: false, isSilent: true },
                { userId: 'park-seojun', src: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&w=512&q=80', chattingName: '박서준', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 999, isPin: false, isSilent: true },
                { userId: 'choi-sujin', src: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&w=512&q=80', chattingName: '최수진', headcount: 3, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: true, isSilent: false },
                { userId: 'jung-haneul', src: 'https://images.pexels.com/photos/3775532/pexels-photo-3775532.jpeg?auto=compress&w=512&q=80', chattingName: '정하늘', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false },
                { userId: 'yoon-jihun', src: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=512&q=80', chattingName: '윤지훈', headcount: 5, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 3, isPin: false, isSilent: true },
                { userId: 'kang-minji', src: 'https://images.pexels.com/photos/1401348/pexels-photo-1401348.jpeg?auto=compress&w=512&q=80', chattingName: '강민지', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 2, isPin: false, isSilent: false },
                { userId: 'song-hyunwoo', src: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&w=512&q=80', chattingName: '송현우', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: true, isSilent: true },
                { userId: 'han-soyoung', src: 'https://images.pexels.com/photos/1452422/pexels-photo-1452422.jpeg?auto=compress&w=512&q=80', chattingName: '한소영', headcount: 2, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: false, isSilent: false },
                { userId: 'cho-sungmin', src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&w=512&q=80', chattingName: '조성민', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 0, isPin: false, isSilent: false },
                { userId: 'kim-daeun', src: 'https://images.pexels.com/photos/21294/pexels-photo.jpg?auto=compress&w=512&q=80', chattingName: '김다은', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false },
                { userId: 'park-minji', src: 'https://images.pexels.com/photos/1130912/pexels-photo-1130912.jpeg?auto=compress&w=512&q=80', chattingName: '박민지', headcount: 6, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 4, isPin: false, isSilent: false },
                { userId: 'choi-jihun', src: 'https://images.pexels.com/photos/3771061/pexels-photo-3771061.jpeg?auto=compress&w=512&q=80', chattingName: '최지훈', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false },
                { userId: 'jung-suyeon', src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&w=512&q=80', chattingName: '정수연', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false },
                { userId: 'han-jiwoo', src: 'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&w=512&q=80', chattingName: '한지우', headcount: 1, lastMessage: '안녕하세요. 오랜만이에요.', lastMessageTime: '2025.10.25 12:00', unreadCount: 1, isPin: false, isSilent: false },
            ]
        }
    }
}
</script>