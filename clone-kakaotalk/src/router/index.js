// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// import할 페이지 컴포넌트
import ChatView from '../views/ChatView.vue'
import ComponentView from '../views/ComponentView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProfileView from '../views/ProfileView.vue'
import ChatListView from '../views/ChatListView.vue'
import MoreView from '../views/MoreView.vue'
import SettingView from '../views/SettingView.vue'

const routes = [
    {
        path: '/',
        name: 'Profile',
        component: ProfileView
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatView
    },
    {
        path: '/chat-list',
        name: 'ChatList',
        component: ChatListView
    },
    {
        path: '/component',
        name: 'Component',
        component: ComponentView
    },
    {
        path: '/more',
        name: 'More',
        component: MoreView
    },
    {
        path: '/setting',
        name: 'Setting',
        component: SettingView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router