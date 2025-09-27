<template>
    <div class="k-input">
        <div v-if="showSelect" @click="handleSelect">showSelect</div>
    
        <input 
            type="text"
            name="input"
            :value="localValue"
            v-bind="inputAttrs"
            @input="handleInput"
        />
    
        <div 
            v-if="maxlength"
            class="k--input-count"
        >
            {{ localValue.length }}/{{ maxlength }}
        </div>
    </div>
</template>
  
<script>
    export default {
        name: 'KInput',
    
        props: {
            maxlength: {
                type: Number
            },
            showSelect: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            }
        },
    
        emits: ['input', 'select'],
    
        data() {
            return {
                localValue: this.value // 내부적으로 입력값 관리
            }
        },
    
        watch: {
            value(newVal) {
                this.localValue = newVal
            }
        },
    
        computed: {
            inputAttrs() {
                const attrs = {}
        
                if (this.placeholder) {
                attrs.placeholder = this.placeholder
                }
        
                if (this.maxlength) {
                attrs.maxlength = this.maxlength
                }
        
                return attrs
            }
        },
    
        methods: {
            handleInput(event) {
                this.localValue = event.target.value
                this.$emit('input', this.localValue)
            },
            handleSelect() {
                this.$emit('select')
            }
        }
    }
</script>