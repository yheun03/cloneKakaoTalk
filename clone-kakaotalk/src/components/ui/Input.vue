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
                localValue: this.value, // 내부적으로 입력값 관리
                selectedValue: '', // 선택된 값 관리
                selectOptions: [
                    { optionTitle: '선택1', optionValue: 'value1', optionChecked: false },
                    { optionTitle: '엄청나게 긴 옵션 명일때 이렇게 길어질 수 있습니다.', optionValue: 'value2', optionChecked: false },
                    { optionTitle: '선택3', optionValue: 'value3', optionChecked: false },
                    { optionTitle: '선택4', optionValue: 'value4', optionChecked: false },
                    { optionTitle: '선택5', optionValue: 'value5', optionChecked: false },
                ],
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