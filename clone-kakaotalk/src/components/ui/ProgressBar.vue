<template>
    <div :class="classes">
        <div :class="innerClasses" :style="{ width: `${progress}%` }"></div>
    </div>
</template>

<script>
    export default {
        name: 'KProgressBar',
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            value: {
                type: Number,
                default: 0
            },
            type: {
                type: String,
                default: 'default'
            },
            isActive: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            progress() {
                // min이 0이 아닌 경우를 고려한 계산
                const range = this.max - this.min;
                const currentValue = this.value - this.min;
                return (currentValue / range) * 100;
            },
            classes() {
                if (this.type === 'round') {
                    return 'k-progress-bar type-round'
                }
                return 'k-progress-bar'
            },
            innerClasses() {
                if (this.isActive === true) {
                    return 'k-progress-bar-inner type-active'
                }
                return 'k-progress-bar-inner'
            }
        }
    }
</script>