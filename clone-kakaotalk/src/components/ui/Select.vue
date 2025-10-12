<template>
    <div class="k-select" :class="selectClasses">
        <div v-if="type=='date'">
            <VueDatePicker
                v-model="date"
                locale="ko"
                enable-time-picker="false"
                hide-input-icon
                :format="formatWithDay"
            />
        </div>
        <div v-else-if="type=='time'">
            <VueDatePicker 
                v-model="time" 
                locale="ko" 
                time-picker
                hide-input-icon
                :format="formatKoreanTime"
            />
        </div>
        <div v-else>
            <select name="select" id="" v-model="selectedOption">
                <option value="선택1">선택1</option>
                <option value="선택2">선택2</option>
                <option value="선택3">선택3</option>
            </select>
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

    export default {
        name: 'KSelect',
        components: {
            VueDatePicker
        },
        props: {
            type: {
                type: String,
                default: '',
                validator: value => ['', 'date', 'time'].includes(value)
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                date: null,
                time: null
            }
        },
        computed: {
            selectClasses() {
                return [
                    this.type && `k-select--${this.type}`
                ]
            }
        }
    }
</script>