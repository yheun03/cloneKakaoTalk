<template>
    <button 
        class="k-button"
        :class="buttonClasses"
        :disabled="disabled || loading"
        :style="{ color: customColor ? `#${customColor}` : '', width: buttonSize ? `${buttonSize}px` : '', height: buttonSize ? `${buttonSize}px` : ''}"
        @click="handleClick">
        <i class="icon" v-if="icon" :style="{ width: iconSize ? `${iconSize}px` : '', height: iconSize ? `${iconSize}px` : ''}" >
            <img :style="{ display: 'inline-block', width: iconSize ? `${iconSize}px` : '', height: iconSize ? `${iconSize}px` : ''}" :src="require(`@/assets/icons/${iconSize}/${icon}.svg`)" :alt="icon">
        </i>
        <slot v-else />
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
                validator: value => ['', 'round', 'toggle', 'text', 'icon'].includes(value)
            },
            icon: {
                type: String,
                default: '',
                validator: value => ['', 'ic-emoji', 'ic-file', 'ic-search', 'ic-menu'].includes(value)
            },
            iconSize: {
                type: [String, Number],
                default: '',
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
            }
        },
  
        emits: ['click'],
  
        computed: {
            buttonClasses() {
                return [
                    this.type && `k-button--${this.type}`,
                    this.color && `k-button--${this.color}`,
                    this.icon && `k-button--icon ${this.icon}`,
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