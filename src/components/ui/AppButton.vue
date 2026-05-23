<template>
    <button 
        class="k-button"
        :class="buttonClasses"
        :disabled="disabled || loading"
        :style="{ color: customColor ? `#${customColor}` : '', width: buttonSize ? `${buttonSize}px` : '', height: buttonSize ? `${buttonSize}px` : ''}"
        @click="handleClick">
        <slot />
    </button>
</template>
  
<script>
export default {
    name: 'AppButton',
    props: {
        color: {
            type: String,
            default: '',
            validator: value => ['', 'primary', 'secondary', 'danger', 'ghost'].includes(value)
        },
        customColor: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: '',
            validator: value => ['', 'round', 'toggle', 'text', 'icon'].includes(value)
        },
        buttonSize: {
            type: [String, Number],
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        }
    },
  
    emits: ['click'],
  
    computed: {
        buttonClasses() {
            return [
                this.type && `k-button--${this.type}`,
                this.color && `k-button--${this.color}`,
                { 
                    'k-button--disabled': this.disabled,
                    'k-button--loading': this.loading,
                    'active': this.active
                }
            ]
        }
    },
  
    methods: {
        handleClick(event) {
            if (this.disabled || this.loading) return
            this.$emit('click', event)
        }
    }
}
</script>
