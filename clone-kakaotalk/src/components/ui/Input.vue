<template>
    <div class="k-input">
        <KSelect v-model="selectedValue" :options="selectOptions" v-if="showSelect" @select="handleSelect"></KSelect>
        
        <div v-if="type!='textarea'">
            <input 
                type="text"
                name="input"
                :value="localValue"
                v-bind="inputAttrs"
                @input="handleInput"
            />
        </div>
    
        <div 
            v-if="maxlength"
            class="k--input-count"
        >
            {{ localValue.length }}/{{ maxlength }}
        </div>

        <div v-if="type=='textarea'" class="k--textarea">
            <textarea name="textarea" v-bind="textareaAttrs" />
        </div>
    </div>
</template>
    
<script>
    import KSelect from '@/components/ui/Select.vue'

    export default {
        name: 'KInput',
        components: {
            KSelect
        },
        props: {
            maxlength: {
                type: Number
            },
            type: {
                type: String,
                default: '',
                validator: value => ['', 'textarea'].includes(value)
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
            },
            textareaAttrs() {
                const attrs = {}
        
                if (this.placeholder) {
                attrs.placeholder = this.placeholder
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