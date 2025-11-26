<template>
    <div class="view-container view-type-main view-profile">
        <GlobalNav />
        <topNav />
        <div class="view-container-body">
            <ProfileCard :profileImage="me.src" :userName="me.name" :profileType="me.type" :backgroundImage="me.backgroundImage"
                :userMessage="me.statusMessage" @avatar-click="openProfileModal" />
            <div class="accordion">
                <div class="accordion-item" v-if="profilesByType('update').length"
                    :class="{ 'is-open': openSections.update }">
                    <p class="accordion-item-trigger" @click="toggleSection('update')">
                        <span>업데이트</span>
                        <i class="icon" :class="openSections.update ? 'ic-arrow-top' : 'ic-arrow-bottom'"></i>
                    </p>
                    <div class="accordion-item-content">
                        <div class="accordion-item-content-inner">
                            <div class="overflow-y-scroll">
                                <ProfileCard v-for="(p, idx) in profilesByType('update')" :key="`upd-${idx}`" :backgroundImage="p.backgroundImage"
                                    :profileImage="p.src" :userName="p.name" :profileType="p.type"
                                    :userMessage="p.statusMessage" @avatar-click="openProfileModal" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item" v-if="profilesByType('birthday').length"
                    :class="{ 'is-open': openSections.birthday }">
                    <p class="accordion-item-trigger" @click="toggleSection('birthday')">
                        <span>생일</span>
                        <i class="icon" :class="openSections.birthday ? 'ic-arrow-top' : 'ic-arrow-bottom'"></i>
                    </p>
                    <div class="accordion-item-content">
                        <div class="accordion-item-content-inner">
                            <ProfileCard v-for="(p, idx) in profilesByType('birthday')" :key="`bd-${idx}`" :backgroundImage="p.backgroundImage"
                                :profileImage="p.src" :userName="p.name" :profileType="p.type"
                                :userMessage="p.statusMessage" @avatar-click="openProfileModal" />
                        </div>
                    </div>
                </div>
                <div class="accordion-item" v-if="profilesByType('').length" :class="{ 'is-open': openSections.more }">
                    <p class="accordion-item-trigger" @click="toggleSection('more')">
                        <span>더보기</span>
                        <i class="icon" :class="openSections.more ? 'ic-arrow-top' : 'ic-arrow-bottom'"></i>
                    </p>
                    <div class="accordion-item-content">
                        <div class="accordion-item-content-inner">
                            <ProfileCard v-for="(p, idx) in profilesByType('')" :key="`more-${idx}`" :backgroundImage="p.backgroundImage"
                                :profileImage="p.src" :userName="p.name" :profileType="p.type"
                                :userMessage="p.statusMessage" @avatar-click="openProfileModal" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProfileModal 
            v-if="showProfileModal"
            :profileImage="selectedProfile.profileImage"
            :userName="selectedProfile.userName"
            :userMessage="selectedProfile.userMessage"
            :backgroundImage="selectedProfile.backgroundImage"
            @close="closeProfileModal"
        />
    </div>
</template>
<script>
import ProfileCard from '@/components/profile/ProfileCard.vue'
import TopNav from '@/views/layouts/TopNav.vue'
import GlobalNav from '@/views/layouts/Gnb.vue'
import ProfileModal from '@/components/modal/ProfileModal.vue'
export default {
    name: 'ProfileView',
    components: {
        ProfileCard,
        TopNav,
        GlobalNav,
        ProfileModal
    },
    data() {
        return {
            showProfileModal: false,
            selectedProfile: {
                profileImage: '',
                userName: '',
                userMessage: '',
                backgroundImage: ''
            },
            me: {
                src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', 
                name: '홍길동', 
                type: 'my', 
                statusMessage: '손에 잡힐 듯 허나 잡히지 않는. 내 역할은 그저',
                backgroundImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
            },
            openSections: {
                update: true,
                birthday: true,
                more: true,
            },
            profiles: [
                // 업데이트된 친구들
                { src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '정수진', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '최동현', type: 'update', statusMessage: '새로운 상태메시지', backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '한지은', type: 'update', statusMessage: '', backgroundImage: '#e69199' },
                { src: 'https://images.unsplash.com/photo-1517363898873-fafc2070293c?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '한지은', type: 'update', statusMessage: '', backgroundImage: '#d5c6ae' },
                { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '윤태호', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80' },
                // 생일인 친구들
                { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '강미영', type: 'birthday', statusMessage: '오늘은 내 생일이에요!', backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '서준호', type: 'birthday', statusMessage: '생일 축하해주세요!', backgroundImage: '#a4b3a7' },
                // 기본 (더보기)
                { src: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '김민준', type: '', statusMessage: '오늘도 화이팅!', backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '이지아', type: '', statusMessage: '커피가 필요해 ☕️', backgroundImage: '#51b38c' },
                { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '박도윤', type: '', statusMessage: '출근 중...', backgroundImage: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '최하윤', type: '', statusMessage: '날씨 너무 좋다 🌤️', backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '정서준', type: '', statusMessage: '운동 다녀왔어요 💪', backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '조민서', type: '', statusMessage: '드라마 정주행 중 🎬', backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '강현우', type: '', statusMessage: '커피 한잔의 여유 ☕️', backgroundImage: '#818a9b' },
                { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '윤하은', type: '', statusMessage: '시험 끝났다! 🎉', backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '장준우', type: '', statusMessage: '새 프로젝트 시작!', backgroundImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '임지유', type: '', statusMessage: '고양이랑 놀기 🐱', backgroundImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1517363898873-fafc2070293c?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '오시후', type: '', statusMessage: '헬스장 도착 💪', backgroundImage: 'https://images.unsplash.com/photo-1465101178521-c1a9136a37bf?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '한지우', type: '', statusMessage: '내일 여행 간다 ✈️', backgroundImage: '#393568' },
                { src: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=facearea&w=256&q=80&facepad=3', name: '서도현', type: '', statusMessage: '요즘 너무 바쁘다 😵', backgroundImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80' },
                // ... 이하 동일하게 적절한 Unsplash, Pexels, Pixabay 무료 이미지로 backgroundImage 교체 ...
            ],
        }
    },
    computed: {
        profilesByType() {
            return (type) => {
                return this.profiles.filter(profile => profile.type === type)
            }
        }
    },
    created() {
        this.openSections.update = this.profilesByType('update').length > 0
        this.openSections.birthday = this.profilesByType('birthday').length > 0
        this.openSections.more = this.profilesByType('').length > 0
    },
    methods: {
        toggleSection(section) {
            this.openSections[section] = !this.openSections[section]
        },
        openProfileModal(profile) {
            this.selectedProfile = {
                profileImage: profile.profileImage,
                userName: profile.userName,
                userMessage: profile.userMessage || '',
                backgroundImage: profile.backgroundImage || ''
            }
            this.showProfileModal = true
        },
        closeProfileModal() {
            this.showProfileModal = false
        }
    }
}
</script>