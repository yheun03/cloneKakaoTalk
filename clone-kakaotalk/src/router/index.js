// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES, ROUTE_NAMES } from '@/constants/routes'

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
        path: ROUTES.PROFILE,
        name: ROUTE_NAMES.PROFILE,
        component: ProfileView
    },
    {
        path: ROUTES.CHAT,
        name: ROUTE_NAMES.CHAT,
        component: ChatView
    },
    {
        path: ROUTES.CHAT_LIST,
        name: ROUTE_NAMES.CHAT_LIST,
        component: ChatListView
    },
    {
        path: ROUTES.COMPONENT,
        name: ROUTE_NAMES.COMPONENT,
        component: ComponentView
    },
    {
        path: ROUTES.MORE,
        name: ROUTE_NAMES.MORE,
        component: MoreView
    },
    {
        path: ROUTES.SETTING,
        name: ROUTE_NAMES.SETTING,
        component: SettingView
    },
    {
        path: ROUTES.NOT_FOUND,
        name: ROUTE_NAMES.NOT_FOUND,
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router