<template>
    <div class="component-view">
        <h1>컴포넌트 모음</h1>
        <h2>UI 컴포넌트</h2>

        <h3>ProgressBar</h3>
        <div class="wrap" style="flex-direction: column; align-items: flex-start; width: 275px;">
            <KProgressBar min="0" max="100" value="32" type="default" :isActive="true"/>
            <KProgressBar min="0" max="100" value="74" type="default" :isActive="false"/>
            <KProgressBar min="0" max="100" value="23" type="round"/>
        </div>

        <h3>ProfileCard</h3>
        <div class="wrap" style="flex-direction: column; align-items: flex-start; width: 275px;">
            <ProfileCard src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." name="홍길동" type="" :birthday=true statusMessage="손에 잡힐 듯 허나 잡히지 않는. 내 역할은 그저" />
            <ProfileCard src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." name="홍길동" type="new" :birthday=false statusMessage="🇯🇵🇩🇪🇨🇭🇫🇷🇨🇳🇺🇸🇹🇼🇸🇬🇫🇮🇳🇴🇸🇪🇩🇰" />
            <ProfileCard src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." name="홍길동" type="" :birthday=true statusMessage="" />
            <ProfileCard src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." name="홍길동" type="new" :birthday=false statusMessage="" />
        </div>

        <h3>ChatBubble</h3>
        <div class="wrap">
            <ChatBubble type="emoji" sender="other" src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif" alt="이모지 이미지입니다." timestamp="2025.01.01 12:00" />
            <ChatBubble type="emoji" sender="me" src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif" alt="이모지 이미지입니다." timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="emoji" sender="other" src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif" alt="이모지 이미지입니다." message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
            <ChatBubble type="emoji" sender="me" src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif" alt="이모지 이미지입니다." message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="file" sender="other" message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
            <ChatBubble type="file" sender="me" message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="text" sender="other" message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
            <ChatBubble type="text" sender="me" message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="text" sender="other" message="불고기는 괜찮을 거 같아!!. https://naver.com" timestamp="2025.01.01 12:00" />
            <ChatBubble type="text" sender="me" message="불고기는 괜찮을 거 같아!!. naver.com" timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="image" sender="other" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." timestamp="2025.01.01 12:00" />
            <ChatBubble type="image" sender="me" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="file" sender="other" message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
            <ChatBubble type="file" sender="me" message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
        </div>

        <h3>Checkbox</h3>
        <div class="wrap">
            <KCheckbox name="checkbox" />
            <KCheckbox name="checkbox">기본 체크박스</KCheckbox>
            <KCheckbox type="image" name="checkbox-image" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." />
            <KCheckbox type="file" name="checkbox-file" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" filename="졸업예정증명서_은영환" filetype="pdf" period="2025.03.10" filesize="89.3KB" />
            <KCheckbox type="link" name="checkbox-link" linkThumbnail="https://yheun03.github.io/portfolio/src/assets/images/og-image.png" linkTitle="IA 정보구조도 설계 첫번째단계" linkDescription="IA는 Information Architech" linkUrl="brunch.co.lr" />
        </div>

        <h3>Selector</h3>
        <div class="wrap">
            <KRadio type="image" />
            <KRadio type="image" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." />
            <KRadio type="illustration" src="https://cdn.pixabay.com/photo/2025/08/13/18/49/mountains-9772732_1280.png" alt="채팅 화면의 배경화면 입니다." />
            <KRadio type="illustration" src="https://cdn.pixabay.com/photo/2025/04/05/06/58/flower-9514615_640.png" alt="채팅 화면의 배경화면 입니다." />
            <KRadio type="illustration" src="https://cdn.pixabay.com/photo/2025/03/16/19/25/flowers-9474432_640.jpg" alt="채팅 화면의 배경화면 입니다." />
            <KRadio type="palette" color="#44f"/>
            <KRadio type="palette-sm" color="#f44"/>
        </div>

        <h3>Select</h3>
        <div class="wrap">
            <KSelect />
            <KSelect type="date" />
            <KSelect type="time" />
        </div>

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
            <KInput type="textarea" placeholder="placeholder" />
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
    import KSelect from '@/components/ui/Select.vue'
    import KRadio from '@/components/ui/Radio.vue'
    import KCheckbox from '@/components/ui/Checkbox.vue'
    import ChatBubble from '@/components/chat/ChatBubble.vue'
    import ProfileCard from '@/components/profile/ProfileCard.vue'
    import KProgressBar from '@/components/ui/ProgressBar.vue'
    export default {
        name: 'ComponentView',
        components: {
            KButton,
            KInput,
            KAvatar,
            KSelect,
            KRadio,
            KCheckbox,
            ChatBubble,
            ProfileCard,
            KProgressBar
        },
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