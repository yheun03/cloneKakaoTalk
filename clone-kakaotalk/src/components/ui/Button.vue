<template>
    <button 
        class="k-button"
        :class="buttonClasses"
        :disabled="disabled || loading"
        @click="handleClick"
    >
        <slot />
    </button>
</template>
  
<script>
    export default {
        name: 'KButton',
  
        props: {
            color: {
                type: String,
                validator: value => ['primary'].includes(value)
            },
            size: {
                type: String,
                default: 'medium',
                validator: value => ['small', 'medium', 'large'].includes(value)
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
  
        emits: ['click'],
  
        computed: {
            buttonClasses() {
                return [
                    `k-button--${this.size}`,
                    this.color && `k-button--${this.color}`,
                    { 
                        'k-button--disabled': this.disabled,
                        'k-button--loading': this.loading 
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