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
                src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '홍길동', type: 'my', statusMessage: '손에 잡힐 듯 허나 잡히지 않는. 내 역할은 그저',
                backgroundImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'
            },
            openSections: {
                update: true,
                birthday: true,
                more: true,
            },
            profiles: [
                // 업데이트된 친구들
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '정수진', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '최동현', type: 'update', statusMessage: '새로운 상태메시지', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한지은', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '윤태호', type: 'update', statusMessage: '', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                // 생일인 친구들
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '강미영', type: 'birthday', statusMessage: '오늘은 내 생일이에요!', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '서준호', type: 'birthday', statusMessage: '생일 축하해주세요!', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                // 기본
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '김민준', type: '', statusMessage: '오늘도 화이팅!', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '이지아', type: '', statusMessage: '커피가 필요해 ☕️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '박도윤', type: '', statusMessage: '출근 중...', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '최하윤', type: '', statusMessage: '날씨 너무 좋다 🌤️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '정서준', type: '', statusMessage: '운동 다녀왔어요 💪', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '조민서', type: '', statusMessage: '드라마 정주행 중 🎬', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '강현우', type: '', statusMessage: '커피 한잔의 여유 ☕️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '윤하은', type: '', statusMessage: '시험 끝났다! 🎉', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '장준우', type: '', statusMessage: '새 프로젝트 시작!', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '임지유', type: '', statusMessage: '고양이랑 놀기 🐱', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '오시후', type: '', statusMessage: '헬스장 도착 💪', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한지우', type: '', statusMessage: '내일 여행 간다 ✈️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '서도현', type: '', statusMessage: '요즘 너무 바쁘다 😵', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '신하은', type: '', statusMessage: '퇴근까지 D-2 ⏰', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '권주원', type: '', statusMessage: '개발 공부 중 👨‍💻', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '황서윤', type: '', statusMessage: '브런치 타임 🍞', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '안지호', type: '', statusMessage: '드라이브 고고 🚗', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '송유진', type: '', statusMessage: '요가 클래스 다녀왔어요', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '류현준', type: '', statusMessage: '플젝 막바지🔥', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '홍수아', type: '', statusMessage: '저녁 뭐 먹지 🤔', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '문준호', type: '', statusMessage: '커피 리필 중 ☕️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '양서연', type: '', statusMessage: '친구 만나러 가는 중 🚶‍♀️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '손민재', type: '', statusMessage: '주말 기다리는 중 💤', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '배나은', type: '', statusMessage: '비가 오네요 ☔️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '백승우', type: '', statusMessage: '달리기 완료 🏃', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '허지민', type: '', statusMessage: '하늘 예쁘다 🌈', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '남도윤', type: '', statusMessage: '새 노래 녹음 중 🎵', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '노채원', type: '', statusMessage: '사진 정리 중 📷', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '심태현', type: '', statusMessage: '책 읽는 중 📚', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '유예린', type: '', statusMessage: '커피 최고 ☕️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '김재윤', type: '', statusMessage: '헬스장 고!', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '이시은', type: '', statusMessage: '요즘 너무 행복해 😄', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '박현우', type: '', statusMessage: '퇴근 후 맥주 한잔 🍺', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '최다은', type: '', statusMessage: '달콤한 오후 💛', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '정민성', type: '', statusMessage: '게임 중 🎮', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '조하린', type: '', statusMessage: '맛집 탐방 중 🍜', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '강준호', type: '', statusMessage: '졸리다 😴', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '윤가은', type: '', statusMessage: '오늘은 쉬는 날 💤', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '장도현', type: '', statusMessage: '회의 중 🗂️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '임서연', type: '', statusMessage: '새 프로젝트 시작!', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '오태윤', type: '', statusMessage: '런닝 완료 🏃‍♂️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한나은', type: '', statusMessage: '오늘도 행복하게 ☀️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '서준우', type: '', statusMessage: '코딩 중 👨‍💻', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '신유나', type: '', statusMessage: '바람 시원하다 🌬️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '권현우', type: '', statusMessage: '커피 두 잔째 ☕️☕️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '황서아', type: '', statusMessage: '디자인 수정 중 🎨', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '안도윤', type: '', statusMessage: '헬스 끝!', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '송하윤', type: '', statusMessage: '빨래 완료 🧺', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '류재민', type: '', statusMessage: '오늘도 코딩 💻', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '홍예진', type: '', statusMessage: '주말이 기다려져요', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '문시후', type: '', statusMessage: '드라마 몰아보기 🎥', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '양민지', type: '', statusMessage: '비 오는 날 ☔️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '손태윤', type: '', statusMessage: '야식 타임 🍗', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '배유정', type: '', statusMessage: '힐링 중 🌿', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '백민재', type: '', statusMessage: '커피 한잔 ☕️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '허수아', type: '', statusMessage: '한강 산책 중 🌊', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '남현석', type: '', statusMessage: '새 노래 녹음 🎧', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '노예빈', type: '', statusMessage: '조용한 하루 😊', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '심도윤', type: '', statusMessage: '맛있는 점심 🍱', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '유소연', type: '', statusMessage: '꽃시장 다녀왔어요 🌸', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '김준호', type: '', statusMessage: '공부 시작 📖', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '이하은', type: '', statusMessage: '커피 마시며 여유롭게 ☕️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '박태윤', type: '', statusMessage: '점심시간 ❤️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '최유나', type: '', statusMessage: '밥 먹자 🍚', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '정현우', type: '', statusMessage: '하루 마무리 중 🌙', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '조민지', type: '', statusMessage: '맛집 리스트 업데이트 🍽️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '강성현', type: '', statusMessage: '산책 완료 🐕', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '윤서연', type: '', statusMessage: '하늘 예뻐요 ☀️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '장지훈', type: '', statusMessage: '오늘도 힘내자 💪', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '임지민', type: '', statusMessage: '새 헤어스타일 💇‍♀️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '오민재', type: '', statusMessage: '좋은 하루 되세요!', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '한은서', type: '', statusMessage: '퇴근하고 쉬는 중 🛋️', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
                { src: 'https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp', name: '서도윤', type: '', statusMessage: '새 아이디어 생각 중 💡', backgroundImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
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