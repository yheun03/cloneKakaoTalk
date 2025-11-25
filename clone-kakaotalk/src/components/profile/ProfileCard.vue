<template>
    <!-- 기본 타입 -->
    <div :class="profileCardClasses">
        <div class="profile-card-avatar" @click="handleAvatarClick">
            <KAvatar :src="profileImage" :alt="`${userName}의 프로필 이미지입니다.`" :size="setSize" :isNew="setNew" />
        </div>
        <div class="profile-card-info">
            <p class="name">{{ userName }} <KIcon icon="ic-birthday" iconSize="18" v-if="profileType == 'birthday'" /></p>
            <p class="status-message" v-if="profileType != 'update'">{{ userMessage }}</p>
        </div>
        <div v-if="profileType == 'birthday'">
            <KButton type="round">선물하기</KButton>
        </div>
    </div>
</template>

<script>
    import KAvatar from '@/components/ui/Avatar.vue'
    import KButton from '@/components/ui/Button.vue'
    import KIcon from '@/components/ui/Icon.vue'

    export default {
        name: 'ProfileCard',
        components: {
            KAvatar,
            KButton,
            KIcon
        },
        props: {
            profileImage: {
                type: String,
                default: ''
            },
            userName: {
                type: String,
                default: ''
            },
            profileType: {
                type: String,
                default: 'default',
                validator: value => ['default', 'my', 'update', 'birthday'].includes(value)
            },
            userMessage: {
                type: String,
            }
        },
        computed: {
            profileCardClasses() {
                return `profile-card type-${this.profileType}`;
            },
            setSize() {
                if (this.profileType == 'my') {
                    return 54;
                } else {
                    return 40;
                }
            },
            setNew() {
                if (this.profileType == 'update') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        methods: {
            handleAvatarClick() {
                this.$emit('avatar-click', {
                    profileImage: this.profileImage,
                    userName: this.userName,
                    userMessage: this.userMessage
                })
            }
        }
    }
</script>