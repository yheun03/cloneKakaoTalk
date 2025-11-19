<template>
    <div class="component-view">
        <h1>컴포넌트 모음</h1>
        <h2>UI 컴포넌트</h2>

        <h3>Setting</h3>
            <div class="wrap">
                <dl class="wrap-setting">
                <dt>
                    <p class="title">타이틀 <span>(1/3)</span></p>
                </dt>
                <dd>
                    <p class="dscpt">등록된 키워드가 포함된 메세지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다. Mac에서 등록한 키워드는 모바일과 동기화됩니다.</p>
                    <div class="wrap-input">
                        <KButton>키워드 편집</KButton>
                    </div>
                </dd>
            </dl>
            <dl class="wrap-setting">
                <dt>
                    <KCheckbox v-model="showKeywordNotification">키워드 알림</KCheckbox>
                </dt>
                <dd>
                    <p class="dscpt">등록된 키워드가 포함된 메세지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다. Mac에서 등록한 키워드는 모바일과 동기화됩니다.</p>
                    <div class="wrap-input">
                        <KButton>키워드 편집</KButton>
                        <KButton>키워드 편집</KButton>
                    </div>
                </dd>
            </dl>
            <dl class="wrap-setting">
                <dt>
                    <p class="title">자동 실행</p>
                </dt>
                <dd>
                    <p class="dscpt">등록된 키워드가 포함된 메세지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다. Mac에서 등록한 키워드는 모바일과 동기화됩니다.</p>
                    <div class="wrap-input">
                        <KCheckbox v-model="showKeywordNotification">키워드 알림</KCheckbox>
                        <KCheckbox v-model="showKeywordNotification">키워드 알림</KCheckbox>
                        <KCheckbox v-model="showKeywordNotification">키워드 알림</KCheckbox>
                    </div>
                </dd>
            </dl>
            <dl class="wrap-setting">
                <dt>
                    <p class="title">글씨체</p>
                </dt>
                <dd>
                    <p class="dscpt">Mac 카카오톡을 선택한 글씨체로 변경합니다.</p>
                    <div class="wrap-input type-column">
                        <span class="label-select">글씨체</span>
                        <KSelect :options="fontOptions" />
                    </div>
                </dd>
            </dl>
            <dl class="wrap-setting">
                <dt>
                    <p class="title">글씨체</p>
                </dt>
                <dd>
                    <p class="dscpt">Mac 카카오톡을 선택한 글씨체로 변경합니다.</p>
                    <div class="wrap-input">
                        <KRange :value="fontSize" @input="fontSize = $event" :min="1" :max="7" :step="1" label-left="가" label-right="가"/>
                    </div>
                </dd>
            </dl>
        </div>

        <h3>ChattingListCard</h3>
        <div class="wrap">
            <ChattingCard 
                src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다."
                chattingName="홍길동"
                lastMessage="[빗썸] KB 국민은행 계좌 사전등록 종료 임박! 서둘러 사전등록을 하셔야 합니다."
                lastMessageTime="2025.10.26 12:00"
                :unreadCount="1"
                :isPin=false
                :isSilent=false />
            <ChattingCard 
                src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다."
                chattingName="홍길동"
                lastMessage="안녕하세요."
                lastMessageTime="2025.10.25 12:00"
                :unreadCount="1"
                :isPin=false
                :isSilent=true />
            <ChattingCard 
                src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다."
                chattingName="홍길동"
                lastMessage="[빗썸]
                KB 국민은행 계좌 사전등록 종료 임박! 서둘러 사전등록을 하셔야 합니다."
                lastMessageTime="2025.01.01 12:00"
                :unreadCount="21"
                :isPin=true
                :isSilent=false />
            <ChattingCard 
                src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다."
                chattingName="홍길동"
                lastMessage="안녕하세요."
                lastMessageTime="2024.12.31 23:59"
                :unreadCount="1"
                :isPin=true
                :isSilent=true />
        </div>

        <h3>ProfileCard</h3>
        <div class="wrap">
            <ProfileCard profileImage="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" userName="홍길동" profileType="my" userMessage="손에 잡힐 듯 허나 잡히지 않는. 내 역할은 그저" />

            <ProfileCard profileImage="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" userName="홍길동" userMessage="손에 잡힐 듯 허나 잡히지 않는. 내 역할은 그저" />
            <ProfileCard profileImage="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" userName="홍길동" userMessage="🇯🇵🇩🇪🇨🇭🇫🇷🇨🇳🇺🇸🇹🇼🇸🇬🇫🇮🇳🇴🇸🇪🇩🇰" />
            <ProfileCard profileImage="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" userName="홍길동" userMessage="" />

            <ProfileCard profileImage="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" userName="홍길동" profileType="update" userMessage="손에 잡힐 듯 허나 잡히지 않는. 내 역할은 그저" />
            <ProfileCard profileImage="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" userName="홍길동" profileType="update" userMessage="" />
        </div>

        <h3>Tab</h3>
        <div class="wrap">
            <KTabs :items="tabsEmoji" type="emoji" />
            <KTabs :items="tabs" />
            <KTabs :items="tabs" type="filled" />
            <KTabs :items="tabs" type="text" />
        </div>

        <h3>Select</h3>
        <div class="wrap">
            <KSelect :options="selectOptions" placeholder="옵션을 선택하세요" />
            <KSelect :options="selectOptions" />
            <KSelect type="date" />
            <KSelect type="time" />
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

        <h3>Modal</h3>
        <div class="wrap">
            <ConfirmModal type="confirm" content="확인하시겠습니까?" cancelButton="취소" confirmButton="확인"
                @clickCancel="handleClickCancel" @clickConfirm="handleClickConfirm" />
        </div>

        <h3>Table</h3>
        <div class="wrap">
            <KTable :headers="['백업 일시', '복원 기한', '백업 기기', '채팅방 개수']" :rows="['없음', '-', 'mac', '164개']"
                hasButton="백업 삭제" @click="handleBackupDelete" />
            <KTable :headers="['백업 일시', '복원 기한', '백업 기기', '채팅방 개수']" :rows="['없음', '기한 만료', 'mac', '164개']" />
        </div>

        <h3>emoticon</h3>
        <div class="wrap">
            <KEmoticon src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif" alt="이모지 이미지입니다."
                type="default" />
            <KEmoticon src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif" alt="이모지 이미지입니다." type="mini" />
            <KEmoticon src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif" alt="이모지 이미지입니다." type="kakao" />
        </div>

        <h3>ProgressBar</h3>
        <div class="wrap" style="flex-direction: column; align-items: flex-start; width: 275px;">
            <KProgressBar :min="0" :max="100" :value="32" type="default" :isActive="true" />
            <KProgressBar :min="0" :max="100" :value="74" type="default" :isActive="false" />
            <KProgressBar :min="0" :max="100" :value="23" type="round" />
        </div>

        <h3>ChatBubble</h3>
        <div class="wrap">
            <ChatBubble type="emoji" sender="other" src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif"
                alt="이모지 이미지입니다." timestamp="2025.01.01 12:00" />
            <ChatBubble type="emoji" sender="me" src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif"
                alt="이모지 이미지입니다." timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="emoji" sender="other" src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif"
                alt="이모지 이미지입니다." message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
            <ChatBubble type="emoji" sender="me" src="https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif"
                alt="이모지 이미지입니다." message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="file" sender="other" filename="스크린샷 2025-08-19 11.48.46" filetype="jpg"
                period="2025.03.10" filesize="89.3KB" timestamp="2025.01.01 12:00" />
            <ChatBubble type="file" sender="me" filename="졸업예정증명서_은영환" filetype="pdf" period="2025.03.10"
                filesize="89.3KB" timestamp="2025.01.01 12:00" />
            <ChatBubble type="file" sender="me" filename="졸업예정증명서_은영환" filetype="mp4" period="2025.03.10"
                filesize="89.3KB" timestamp="2025.01.01 12:00" />
            <ChatBubble type="file" sender="me" filename="졸업예정증명서_은영환" filetype="" period="2025.03.10" filesize="89.3KB"
                timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="text" sender="other" message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
            <ChatBubble type="text" sender="me" message="불고기는 괜찮을 거 같아!!." timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="text" sender="other" message="불고기는 괜찮을 거 같아!!. https://naver.com"
                timestamp="2025.01.01 12:00" />
            <ChatBubble type="text" sender="me" message="불고기는 괜찮을 거 같아!!. naver.com" timestamp="2025.01.01 12:00" />
        </div>
        <div class="wrap">
            <ChatBubble type="image" sender="other"
                src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."
                timestamp="2025.01.01 12:00" />
            <ChatBubble type="image" sender="me"
                src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다."
                timestamp="2025.01.01 12:00" />
        </div>
        <h3>Checkbox</h3>
        <div class="wrap">
            <KCheckbox name="checkbox" />
            <KCheckbox name="checkbox">기본 체크박스</KCheckbox>
            <KCheckbox type="image" name="checkbox-image"
                src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" alt="사용자의 프로필 이미지입니다." />
            <KCheckbox type="file" name="checkbox-file"
                src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp" filename="졸업예정증명서_은영환"
                filetype="pdf" period="2025.03.10" filesize="89.3KB" />
            <KCheckbox type="link" name="checkbox-link"
                linkThumbnail="https://yheun03.github.io/portfolio/src/assets/images/og-image.png"
                linkTitle="IA 정보구조도 설계 첫번째단계" linkDescription="IA는 Information Architech" linkUrl="brunch.co.lr" />
        </div>

        <h3>Selector</h3>
        <div class="wrap">
            <KRadio type="image" />
            <KRadio type="image" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KRadio type="illustration" src="https://cdn.pixabay.com/photo/2025/08/13/18/49/mountains-9772732_1280.png"
                alt="채팅 화면의 배경화면 입니다." />
            <KRadio type="illustration" src="https://cdn.pixabay.com/photo/2025/04/05/06/58/flower-9514615_640.png"
                alt="채팅 화면의 배경화면 입니다." />
            <KRadio type="illustration" src="https://cdn.pixabay.com/photo/2025/03/16/19/25/flowers-9474432_640.jpg"
                alt="채팅 화면의 배경화면 입니다." />
            <KRadio type="palette" color="#44f" />
            <KRadio type="palette-sm" color="#f44" />
        </div>

        <h3>Button</h3>
        <div class="wrap">
            <KButton>버튼</KButton>
            <KButton color="primary">버튼</KButton>
            <KButton disabled>버튼</KButton>
            <KButton type="round">선물하기</KButton>
            <KButton type="toggle">이름</KButton>
        </div>

        <h3>Avatar</h3>
        <div class="wrap">
            <KAvatar size="90" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KAvatar size="84" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KAvatar size="54" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KAvatar size="44" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KAvatar size="40" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KAvatar size="40" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." type="new" />
            <KAvatar size="36" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KAvatar size="28" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KAvatar size="24" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
            <KAvatar size="22" src="https://yheun03.github.io/portfolio/src/assets/images/photo-1920.webp"
                alt="사용자의 프로필 이미지입니다." />
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
import KEmoticon from '@/components/chat/Emoticon.vue'
import KTable from '@/components/ui/Table.vue'
import ConfirmModal from '@/components/modal/Modal.vue'
import ChattingCard from '@/components/chat/ChattingCard.vue'
import KTabs from '@/components/ui/Tab.vue'

import { markRaw } from 'vue'
import OverviewTab from '@/views/tabs/OverviewTab.vue'
import StatsTab from '@/views/tabs/StatsTab.vue'
import SettingsTab from '@/views/tabs/SettingsTab.vue'


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
        KProgressBar,
        KEmoticon,
        KTable,
        ConfirmModal,
        KTabs,
        ChattingCard,
    },
    data() {
        return {
            active: null,
            selectOptions: [
                { optionTitle: '선택1', optionValue: 'value1', optionChecked: false },
                { optionTitle: '엄청나게 긴 옵션 명일때 이렇게 길어질 수 있습니다.', optionValue: 'value2', optionChecked: false },
                { optionTitle: '선택3', optionValue: 'value3', optionChecked: false },
                { optionTitle: '선택4', optionValue: 'value4', optionChecked: false },
                { optionTitle: '선택5', optionValue: 'value5', optionChecked: false },
            ],
            tabs: [
                { label: '개요', value: 'overview', component: markRaw(OverviewTab) },
                { label: '통계', value: 'stats', component: markRaw(StatsTab) },
                { label: '설정', value: 'settings', component: markRaw(SettingsTab) },
            ],
            tabsEmoji: [
                { label: 'https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif', value: 'e1', component: markRaw(OverviewTab) },
                { label: 'https://jonsoft.co.kr/resources/icons/36/ic-download.svg', value: 'e2', component: markRaw(StatsTab) },
                { label: 'https://www.gc.go.kr/design/main/img/sub01/532/imo_02.gif', value: 'e3', component: markRaw(SettingsTab) },
            ],
        }
    },
    methods: {
        handleBackupDelete() { alert('백업 삭제') },
        handleClickCancel() { alert('취소') },
        handleClickConfirm() { alert('확인') },
    },
}
</script>

<style lang="scss" scoped>
h1 {
    font: 700 24px/normal "Pretendard";
    color: #fff;
}

h2 {
    font: 700 18px/normal "Pretendard";
    color: #fff;
    margin-block: 32px 24px;
}

h3 {
    font: 700 16px/normal "Pretendard";
    color: #fff;
    margin-block: 24px 16px;
}

.wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding-inline: 20px;
    align-items: center;
}
</style>