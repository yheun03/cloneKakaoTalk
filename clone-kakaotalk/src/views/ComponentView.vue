<template>
    <div class="component-view">
        <h1>컴포넌트 모음</h1>
        <h2>UI 컴포넌트</h2>

        <h3>Button</h3>
        <div class="wrap">
            <KButton>버튼</KButton>
            <KButton color="primary">버튼</KButton>
            <KButton disabled>버튼</KButton>
            <KButton type="round">선물하기</KButton>
            <KButton type="toggle">이름</KButton>
        </div>

        <h3>Input</h3>
        <div class="wrap">
            <KInput />
            <KInput value="test" />
            <KInput :maxlength="10" />
            <KInput placeholder="placeholder" />
            <KInput showSelect />
            <KInput showSelect placeholder="placeholder" />
        </div>

        <h3>Select</h3>
        <div class="wrap">
            <KSelect>선택</KSelect>
            <KSelect color="primary">선택</KSelect>
            <KSelect disabled>선택</KSelect>
            <KSelect type="round">선택</KSelect>
            <KSelect color="primary" type="round">선택</KSelect>
            <KSelect disabled type="round">선택</KSelect>
        </div>

        <h3>Avatar</h3>
        <div class="wrap">
            <KAvatar size="90" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
            <KAvatar size="84" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
            <KAvatar size="54" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
            <KAvatar size="44" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
            <KAvatar size="40" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
            <KAvatar size="40" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." type="new"/>
            <KAvatar size="36" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
            <KAvatar size="28" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
            <KAvatar size="24" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
            <KAvatar size="22" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."/>
        </div>
        
    </div>
</template>

<script>
    import KButton from '@/components/ui/Button.vue'
    import KInput from '@/components/ui/Input.vue'
    import KAvatar from '@/components/ui/Avatar.vue'
    // import KSelect from '@/components/ui/Select.vue'
    export default {
        name: 'ComponentView',
        components: {
            KButton,
            KInput,
            KAvatar,
            // KSelect
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        font: 700 24px/normal "Pretendard";
        color: #fff;
    }

    h2{
        font: 700 18px/normal "Pretendard";
        color: #fff;
        margin-block: 32px 24px;
    }
    h3{
        font: 700 16px/normal "Pretendard";
        color: #fff;
        margin-block: 24px 16px;
    }

    .wrap{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        padding-inline: 20px;
        align-items: center;
    }
</style>