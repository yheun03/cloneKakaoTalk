// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// import할 페이지 컴포넌트
import MainView from '../views/MainView.vue'
import ChatView from '../views/ChatView.vue'
import ComponentView from '../views/ComponentView.vue'

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
    path: '/component',
    name: 'Component',
    component: ComponentView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router