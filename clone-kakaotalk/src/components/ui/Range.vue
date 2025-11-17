<template>
    <div class="k-range">
        <span v-if="labelLeft" class="k-range-label k-range-label--left">{{ labelLeft }}</span>
        <div class="k-range-wrapper" :style="wrapperStyle">
            <input 
                type="range" 
                :value="value"
                @input="handleInput"
                :min="min" 
                :max="max" 
                :step="step" 
                class="k-range-input"
            />
        </div>
        <span v-if="labelRight" class="k-range-label k-range-label--right">{{ labelRight }}</span>
    </div>
</template>

<script>
export default {
    name: 'KRange',
    props: {
        value: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 7
        },
        step: {
            type: Number,
            default: 1
        },
        labelLeft: {
            type: String,
            default: ''
        },
        labelRight: {
            type: String,
            default: ''
        }
    },
    emits: ['input'],
    computed: {
        stepCount() {
            const range = this.max - this.min
            if (range <= 0 || this.step <= 0) {
                return 1
            }
            return Math.max(1, range / this.step)
        },
        progressPercent() {
            // min-max 범위를 0-100%로 변환
            const range = this.max - this.min;
            const currentValue = this.value - this.min;
            return range > 0 ? (currentValue / range) * 100 : 0;
        },
        wrapperStyle() {
            return {
                '--progress': `${this.progressPercent}%`,
                '--range-step-count': this.stepCount
            }
        }
    },
    methods: {
        handleInput(event) {
            const newValue = parseFloat(event.target.value);
            this.$emit('input', newValue);
        }
    }
}
</script>

