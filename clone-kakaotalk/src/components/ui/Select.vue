<template>
    <div class="k-select" :class="selectClasses">
        <button 
            class="k-select__trigger"
            :disabled="disabled"
            @click="toggleDropdown"
            @keydown.enter="toggleDropdown"
            @keydown.space.prevent="toggleDropdown"
            @keydown.escape="closeDropdown"
            @keydown.arrow-down.prevent="openDropdown"
            @keydown.arrow-up.prevent="openDropdown"
        >
            <span class="k-select__value">
                {{ selectedOption ? selectedOption.label : placeholder }}
            </span>
            <span class="k-select__arrow" :class="{ 'k-select__arrow--open': isOpen }">
                ▼
            </span>
        </button>
        
        <transition name="dropdown">
            <div v-if="isOpen" class="k-select__dropdown">
                <div class="k-select__options">
                    <button
                        v-for="option in options"
                        :key="option.value"
                        class="k-select__option"
                        :class="{ 'k-select__option--selected': option.value === modelValue }"
                        @click="selectOption(option)"
                    >
                        {{ option.label }}
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script>
    export default {
        name: 'KSelect',
  
        props: {
            modelValue: {
                type: [String, Number],
                default: null
            },
            options: {
                type: Array,
                required: true,
                validator: options => options.every(option => 
                    typeof option === 'object' && 
                    'value' in option && 
                    'label' in option
                )
            },
            placeholder: {
                type: String,
                default: '선택하세요'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'medium',
                validator: value => ['small', 'medium', 'large'].includes(value)
            }
        },
  
        emits: ['update:modelValue', 'change'],
  
        data() {
            return {
                isOpen: false
            }
        },
  
        computed: {
            selectClasses() {
                return [
                    `k-select--${this.size}`,
                    { 
                        'k-select--disabled': this.disabled,
                        'k-select--open': this.isOpen
                    }
                ]
            },
            selectedOption() {
                return this.options.find(option => option.value === this.modelValue)
            }
        },
  
        methods: {
            toggleDropdown() {
                if (this.disabled) return
                this.isOpen = !this.isOpen
            },
            openDropdown() {
                if (this.disabled) return
                this.isOpen = true
            },
            closeDropdown() {
                this.isOpen = false
            },
            selectOption(option) {
                this.$emit('update:modelValue', option.value)
                this.$emit('change', option)
                this.closeDropdown()
            }
        },
  
        mounted() {
            document.addEventListener('click', this.handleClickOutside)
        },
  
        beforeUnmount() {
            document.removeEventListener('click', this.handleClickOutside)
        },
  
        methods: {
            ...this.methods,
            handleClickOutside(event) {
                if (!this.$el.contains(event.target)) {
                    this.closeDropdown()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.k-select {
    position: relative;
    display: inline-block;
    width: 100%;
    
    &__trigger {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #e1e5e9;
        border-radius: 8px;
        background: #fff;
        font-size: 16px;
        color: #333;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.2s ease;
        
        &:hover:not(:disabled) {
            border-color: #007bff;
        }
        
        &:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }
        
        &:disabled {
            background: #f8f9fa;
            color: #6c757d;
            cursor: not-allowed;
        }
    }
    
    &__value {
        flex: 1;
        text-align: left;
        color: #333;
    }
    
    &__arrow {
        margin-left: 8px;
        font-size: 12px;
        color: #6c757d;
        transition: transform 0.2s ease;
        
        &--open {
            transform: rotate(180deg);
        }
    }
    
    &__dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 1000;
        background: #fff;
        border: 1px solid #e1e5e9;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        margin-top: 4px;
        overflow: hidden;
    }
    
    &__options {
        max-height: 200px;
        overflow-y: auto;
    }
    
    &__option {
        width: 100%;
        padding: 12px 16px;
        border: none;
        background: transparent;
        text-align: left;
        font-size: 16px;
        color: #333;
        cursor: pointer;
        transition: background-color 0.2s ease;
        
        &:hover {
            background: #f8f9fa;
        }
        
        &--selected {
            background: #e3f2fd;
            color: #1976d2;
            font-weight: 500;
        }
    }
    
    // Size variants
    &--small {
        .k-select__trigger {
            padding: 8px 12px;
            font-size: 14px;
        }
        
        .k-select__option {
            padding: 8px 12px;
            font-size: 14px;
        }
    }
    
    &--large {
        .k-select__trigger {
            padding: 16px 20px;
            font-size: 18px;
        }
        
        .k-select__option {
            padding: 16px 20px;
            font-size: 18px;
        }
    }
    
    &--disabled {
        .k-select__trigger {
            background: #f8f9fa;
            color: #6c757d;
            cursor: not-allowed;
        }
    }
    
    &--open {
        .k-select__trigger {
            border-color: #007bff;
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }
    }
}

// Dropdown transition
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease;
}

.dropdown-enter-from {
    opacity: 0;
    transform: translateY(-8px);
}

.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>