<template>
    <div class="setting-screen-tab">
        <dl class="wrap-setting">
            <dt>
                <p class="title">화면 모드</p>
            </dt>
            <dd>
                <div class="wrap-input">
                    <KRadio v-model="screenMode" type="illustration" :src="require('@/assets/images/setScreenMode/screen-mode-1.png')" alt="화면 모드"></KRadio>
                    <KRadio v-model="screenMode" type="illustration" :src="require('@/assets/images/setScreenMode/screen-mode-2.png')" alt="화면 모드"></KRadio>
                    <KRadio v-model="screenMode" type="illustration" :src="require('@/assets/images/setScreenMode/screen-mode-3.png')" alt="화면 모드"></KRadio>
                </div>
                <p class="dscpt">시스템 설정 모드를 선택할 경우 OS 디스플레이 설정에 따라 카카오톡도 라이트/다크 모드로 자동 전환됩니다.</p>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <p class="title">채팅방 배경화면</p>
            </dt>
            <dd>
                <p class="dscpt">채팅방에 적용할 배경화면을 선택합니다.</p>
                <div class="wrap-input">
                    <KButton>배경화면 선택</KButton>
                    <KButton>전체 적용하기</KButton>
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
                    <KSelect :options="fontOptions" />
                </div>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <p class="title">글자크기</p>
            </dt>
            <dd>
                <div class="wrap-input">
                    <KRange :value="fontSize" @input="fontSize = $event" :min="1" :max="7" :step="1" label-left="가" label-right="가"/>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
import KRadio from '@/components/ui/Radio.vue'
import KButton from '@/components/ui/Button.vue'
import KSelect from '@/components/ui/Select.vue'
import KRange from '@/components/ui/Range.vue'
export default {
    name: 'SettingScreenTabView',
    components: {
        KRadio,
        KButton,
        KSelect,
        KRange
    },
    data() {
        return {
            screenMode: '',
            fontSize: 4, // 기본값: 중간 (1-7 범위에서 4)
            fontOptions: []
        }
    },
    watch: {
        fontSize(newValue) {
            // 값이 변경될 때 저장 (로컬 스토리지 또는 상태 관리)
            localStorage.setItem('fontSize', newValue.toString());
        }
    },
    mounted() {
        // 저장된 값 불러오기
        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            this.fontSize = parseInt(savedFontSize, 10);
        }
    }
}
</script>