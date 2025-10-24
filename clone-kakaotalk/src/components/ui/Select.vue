<template>
    <div class="k-select" :class="selectClasses">
        <div v-if="type == 'date'">
            <VueDatePicker v-model="date" locale="ko" :enable-time-picker="false" hide-input-icon
                :format="formatWithDay" />
        </div>
        <div v-else-if="type == 'time'">
            <VueDatePicker v-model="time" locale="ko" time-picker hide-input-icon :format="formatKoreanTime" />
        </div>
        <div v-else class="k-select-wrapper" ref="selectWrapper">
            <div class="k-select-opener" :class="openerClasses" @click="toggleOptions">
                {{ displayText }}
            </div>
            <div class="k-select-option-list" v-show="isOpen">
                <selectOption v-for="option in localOptions" :key="option.optionValue" :optionTitle="option.optionTitle"
                    :optionValue="option.optionValue" :optionChecked="option.optionChecked"
                    @click="handleOptionClick(option)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());
const time = ref(null);

// 요일을 한글로 변환하는 함수
const daysKo = ['일', '월', '화', '수', '목', '금', '토'];
const formatWithDay = (date) => {
    if (!date) return '';
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayOfWeek = daysKo[date.getDay()];
    return `${year}.${month}.${day} (${dayOfWeek})`;
}

// 시간 값을 "오전/오후 8:00" 형식으로 변환하는 함수
const formatKoreanTime = (date) => {
    if (!date) return '';
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const isPM = hours >= 12;
    const period = isPM ? '오후' : '오전';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${period} ${hours}:${minutes}`;
}
</script>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import selectOption from '@/components/ui/Option.vue';

export default {
    name: 'KSelect',
    props: {
        type: {
            type: String,
            default: '',
            validator: value => ['', 'date', 'time'].includes(value)
        },
        options: {
            type: Array,
            default: () => []
        },
        placeholder: {
            type: String,
            default: '옵션을 선택하세요'
        }
    },
    data() {
        return {
            date: null,
            time: null,
            isOpen: false,
            // ✅ 부모 props를 건드리지 않도록 복사본을 만들어 관리
            localOptions: this.options.map(opt => ({ ...opt }))
        }
    },
    computed: {
        selectClasses() {
            return [this.type && `k-select--${this.type}`]
        },
        displayText() {
            const selectedOption = this.localOptions.find(option => option.optionChecked)
            return selectedOption ? selectedOption.optionTitle : this.placeholder
        },
        openerClasses() {
            const selectedOption = this.localOptions.find(option => option.optionChecked)
            return { 'k-select-opener--placeholder': !selectedOption }
        }
    },
    methods: {
        toggleOptions() {
            this.isOpen = !this.isOpen
        },
        handleOptionClick(clickedOption) {
            // ✅ localOptions만 변경
            this.localOptions.forEach(option => { option.optionChecked = false })
            clickedOption.optionChecked = true
            this.isOpen = false
            // 필요하면 선택된 값 부모로 전달
            this.$emit('change', clickedOption)
        },
        handleOutsideClick(event) {
            if (this.$refs.selectWrapper && !this.$refs.selectWrapper.contains(event.target)) {
                this.isOpen = false
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleOutsideClick)
    }
}
</script>