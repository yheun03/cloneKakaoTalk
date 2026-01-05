<template>
    <div class="view-container view-type-main view-profile">
        <global-nav />
        <top-nav />
        <div class="view-container-body">
            <ProfileCard :userId="me.userId" :profileType="'my'" />
            <div class="accordion">
                <div class="accordion-item" v-if="profilesByType('update').length"
                    :class="{ 'is-open': openSections.update }">
                    <p class="accordion-item-trigger" @click="toggleSection('update')">
                        <span>업데이트</span>
                        <Icon16ArrowTop v-if="openSections.update" :width="16" :height="16" />
                        <Icon16ArrowBottom v-else :width="16" :height="16" />
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
                        <Icon16ArrowTop v-if="openSections.birthday" :width="16" :height="16" />
                        <Icon16ArrowBottom v-else :width="16" :height="16" />
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
                        <Icon16ArrowTop v-if="openSections.more" :width="16" :height="16" />
                        <Icon16ArrowBottom v-else :width="16" :height="16" />
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
import GlobalNav from '@/views/layouts/GlobalNav.vue'
import Icon16ArrowTop from '@/assets/icons/16/ic-arrow-top.svg'
import Icon16ArrowBottom from '@/assets/icons/16/ic-arrow-bottom.svg'

export default {
    name: 'ProfileView',
    components: {
        ProfileCard,
        TopNav,
        GlobalNav,
        Icon16ArrowTop,
        Icon16ArrowBottom
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
                // 업데이트된 친구들
                { userId: 'kim-minsu', type: 'update' },
                { userId: 'lee-jieun', type: 'update' },
                { userId: 'park-seojun', type: 'update' },
                { userId: 'choi-sujin', type: 'update' },
                { userId: 'jung-haneul', type: 'update' },
                { userId: 'yoon-jihun', type: 'update' },
                { userId: 'kang-minji', type: 'update' },
                { userId: 'song-hyunwoo', type: 'update' },
                { userId: 'han-soyoung', type: 'update' },
                // 생일인 친구들
                { userId: 'cho-sungmin', type: 'birthday' },
                { userId: 'kim-daeun', type: 'birthday' },
                { userId: 'park-minji', type: 'birthday' },
                { userId: 'choi-jihun', type: 'birthday' },
                { userId: 'jung-suyeon', type: 'birthday' },
                // 기본 (더보기)
                { userId: 'han-jiwoo', type: '' },
                { userId: 'kim-minho', type: '' },
                { userId: 'lee-seoyeon', type: '' },
                { userId: 'park-daehyun', type: '' },
                { userId: 'choi-younghee', type: '' },
                { userId: 'lee-junho', type: '' },
                { userId: 'jung-miyoung', type: '' },
                { userId: 'han-jihun', type: '' },
                { userId: 'kim-sujin', type: '' },
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