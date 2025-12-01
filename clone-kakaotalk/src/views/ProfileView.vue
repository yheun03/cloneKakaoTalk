<template>
    <div class="view-container view-type-main view-profile">
        <GlobalNav />
        <topNav />
        <div class="view-container-body">
            <ProfileCard :userId="me.userId" :profileType="'my'" />
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
                                <ProfileCard v-for="(p, idx) in profilesByType('update')" :key="`upd-${idx}`" 
                                    :userId="p.userId" :profileType="'update'" />
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
                            <ProfileCard v-for="(p, idx) in profilesByType('birthday')" :key="`bd-${idx}`" 
                                :userId="p.userId" :profileType="'birthday'" />
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
                            <ProfileCard v-for="(p, idx) in profilesByType('')" :key="`more-${idx}`" 
                                :userId="p.userId" :profileType="'default'" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProfileCard from '@/components/profile/ProfileCard.vue'
import TopNav from '@/views/layouts/TopNav.vue'
import GlobalNav from '@/views/layouts/Gnb.vue'

export default {
    name: 'ProfileView',
    components: {
        ProfileCard,
        TopNav,
        GlobalNav
    },
    data() {
        return {
            me: {
                userId: 'eyh'
            },
            openSections: {
                update: true,
                birthday: true,
                more: true,
            },
            profiles: [
                // 업데이트된 친구들
                { userId: 'jung-sujin', type: 'update' },
                { userId: 'choi-donghyun', type: 'update' },
                { userId: 'han-jieun', type: 'update' },
                { userId: 'han-jieun-2', type: 'update' },
                { userId: 'han-jieun-3', type: 'update' },
                { userId: 'han-jieun-4', type: 'update' },
                { userId: 'han-jieun-5', type: 'update' },
                { userId: 'han-jieun-6', type: 'update' },
                { userId: 'yoon-taeho', type: 'update' },
                // 생일인 친구들
                { userId: 'kang-miyoung', type: 'birthday' },
                { userId: 'seo-junho', type: 'birthday' },
                // 기본 (더보기)
                { userId: 'kim-minjun', type: '' },
                { userId: 'lee-jia', type: '' },
                { userId: 'park-doyoon', type: '' },
                { userId: 'choi-hayoon', type: '' },
                { userId: 'jung-seojun', type: '' },
                { userId: 'cho-minseo', type: '' },
                { userId: 'kang-hyunwoo', type: '' },
                { userId: 'yoon-haeun', type: '' },
                { userId: 'jang-junwoo', type: '' },
                { userId: 'im-jiyu', type: '' },
                { userId: 'oh-sihu', type: '' },
                { userId: 'han-jiwoo', type: '' },
                { userId: 'seo-dohyun', type: '' },
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
        }
    }
}
</script>