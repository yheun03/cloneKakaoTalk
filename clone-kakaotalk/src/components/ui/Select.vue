<template>
    <button 
        class="k-select"
        :class="selectClasses"
        :disabled="disabled || loading"
        @click="handleClick"
    >
        <slot />
    </button>
</template>
  
<script>
    export default {
        name: 'KSelect',
  
        props: {
            color: {
                type: String,
                default: '',
                validator: value => ['primary'].includes(value)
            },
            type: {
                type: String,
                default: '',
                validator: value => ['round'].includes(value)
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
            selectClasses() {
                return [
                    this.type && `k-button--${this.type}`,
                    this.color && `k-select--${this.color}`,
                    { 
                        'k-select--disabled': this.disabled,
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