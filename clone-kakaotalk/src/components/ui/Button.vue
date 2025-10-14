<template>
    <button 
        class="k-button"
        :class="buttonClasses"
        :disabled="disabled || loading"
        :style="{ color: customColor ? `#${customColor}` : '' }"
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
                validator: value => ['', 'round', 'toggle', 'text'].includes(value)
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
                    this.type && `k-button--${this.type}`,
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