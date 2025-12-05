<template>
    <div :class="optionClasses" :value="optionValue" @click="handleClick">{{ optionTitle }}</div>
</template>

<script>
export default {
    name: 'AppOption',
    props: {
        optionTitle: {
            type: String,
            default: ''
        },
        optionValue: {
            type: String,
            default: ''
        },
        optionChecked: {
        type: Boolean,
            default: false
        }
    },
    computed: {
        optionClasses() {
            return ['k-select-option-item', {
                'checked': this.optionChecked
            }]
        }
    },
    methods: {
        handleClick() {
            this.$emit('click', {
                optionTitle: this.optionTitle,
                optionValue: this.optionValue,
                optionChecked: this.optionChecked
            });
        }
    }
}
</script>