// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// import할 페이지 컴포넌트
import MainView from '../views/MainView.vue'
import ChatView from '../views/ChatView.vue'
import ComponentView from '../views/ComponentView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProfileView from '../views/ProfileView.vue'
import ChatListView from '../views/ChatListView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainView
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
        path: '/profile',
        name: 'Profile',
        component: ProfileView
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