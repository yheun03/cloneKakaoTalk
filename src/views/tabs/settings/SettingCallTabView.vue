<template>
    <div class="setting-call-tab">
        <dl class="wrap-setting">
            <dt>
                <p class="title">타이틀 <span>(1/3)</span></p>
            </dt>
            <dd>
                <p class="dscpt">등록된 키워드가 포함된 메세지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다. Mac에서 등록한 키워드는 모바일과 동기화됩니다.</p>
                <div class="wrap-input">
                    <app-button>키워드 편집</app-button>
                </div>
            </dd>
        </dl>
        <dl class="wrap-setting">
            <dt>
                <app-checkbox v-model="showKeywordNotification">키워드 알림</app-checkbox>
            </dt>
            <dd>
                <p class="dscpt">등록된 키워드가 포함된 메세지는 채팅방 알림이 꺼져 있어도 푸시 알림을 받게 됩니다. Mac에서 등록한 키워드는 모바일과 동기화됩니다.</p>
                <div class="wrap-input">
                    <app-button>키워드 편집</app-button>
                    <app-button>키워드 편집</app-button>
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
                    <app-checkbox v-model="showKeywordNotification">키워드 알림</app-checkbox>
                    <app-checkbox v-model="showKeywordNotification">키워드 알림</app-checkbox>
                    <app-checkbox v-model="showKeywordNotification">키워드 알림</app-checkbox>
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
                    <app-select :options="fontOptions" />
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
                    <app-range :value="fontSize" @input="fontSize = $event" :min="1" :max="7" :step="1" label-left="가" label-right="가"/>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
import AppButton from '@/components/ui/AppButton.vue'
import AppSelect from '@/components/ui/AppSelect.vue'
import AppRange from '@/components/ui/AppRange.vue'
import AppCheckbox from '@/components/ui/AppCheckbox.vue'
export default {
    name: 'SettingCallTabView',
    components: {
        AppButton,
        AppSelect,
        AppRange,
        AppCheckbox
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