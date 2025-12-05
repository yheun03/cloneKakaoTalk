<template>
    <button 
        class="k-button"
        :class="buttonClasses"
        :disabled="disabled || loading"
        :style="{ color: customColor ? `#${customColor}` : '', width: buttonSize ? `${buttonSize}px` : '', height: buttonSize ? `${buttonSize}px` : ''}"
        @click="handleClick">
        <app-icon v-if="type == 'icon' && icon" :icon="icon" :icon-size="iconSize || '24'" />
        <slot v-if="type != 'icon'" />
        <app-icon v-if="type == 'toggle'" icon="ic-xmark" :icon-size="12" />
    </button>
</template>
  
<script>
    import AppIcon from '@/components/ui/AppIcon.vue'
    export default {
        name: 'AppButton',
        components: {
            AppIcon
        },
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
                type: String
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
                    this.icon && `k-button--icon ${this.icon}`,
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