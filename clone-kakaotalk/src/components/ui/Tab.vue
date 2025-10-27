<template>
    <div class="k-tabs">
        <!-- 이모지 타입 -->
        <div v-if="type === 'emoji'" class="k-tabs__list" :class="[type && `type-${type}`]" role="tablist"
            aria-orientation="horizontal" @keydown="onKeydown">
            <button role="button" aria-label="이전 탭" type="button" class="nav-btn" @click="focusIndex(currentIndex - 1)">
                <i class="icon ic-arrow-left"></i>
            </button>

            <div class="wrap">
                <button v-for="it in items" :key="it.value" ref="setBtnRef" class="k-tab" role="tab" type="button"
                    :aria-selected="currentValue === it.value ? 'true' : 'false'"
                    :tabindex="currentValue === it.value ? 0 : -1" @click="select(it.value)">
                    <i class="k-tab__icon" :style="{ backgroundImage: `url(${it.label})` }"></i>
                </button>
            </div>

            <button role="button" aria-label="다음 탭" type="button" class="nav-btn" @click="focusIndex(currentIndex + 1)">
                <i class="icon ic-arrow-right"></i>
            </button>
        </div>

        <!-- 기본/filled/text 타입 -->
        <div v-else class="k-tabs__list" :class="[type && `type-${type}`]" role="tablist" aria-orientation="horizontal"
            @keydown="onKeydown">
            <button v-for="it in items" :key="it.value" ref="setBtnRef" class="k-tab" role="tab" type="button"
                :aria-selected="currentValue === it.value ? 'true' : 'false'"
                :tabindex="currentValue === it.value ? 0 : -1" @click="select(it.value)">
                <span>{{ it.label }}</span>
            </button>
        </div>

        <!-- 패널 -->
        <div class="k-tabs__panel" role="tabpanel">
            <component :is="activeComp || FallbackPanel" />
        </div>
    </div>
</template>

<script>
import { markRaw } from 'vue'

const FallbackPanel = markRaw({ name: 'FallbackPanel', template: `<div style="padding:.75rem;color:#6b7280;">패널 없음</div>` })

export default {
    name: 'KTabs',
    props: {
        // v-model이 없어도 동작하도록 default를 undefined로
        modelValue: { type: [String, Number], default: undefined },
        items: {
            type: Array, required: true,
            validator: (arr) => arr.every(x => 'label' in x && 'value' in x && 'component' in x)
        },
        type: { type: String, default: '', validator: v => ['', 'filled', 'text', 'emoji'].includes(v) },
        // 옵션: v-model 없이 시작할 때 기본으로 선택할 값
        defaultValue: { type: [String, Number], default: null },
        // 옵션: true면 (기본) 첫 항목 자동 선택
        autoSelectFirst: { type: Boolean, default: true },
    },
    emits: ['update:modelValue', 'change'],
    data() { return { btnRefs: [], innerValue: null } },
    computed: {
        isControlled() { return this.modelValue !== undefined }, // v-model 유무 판별
        safeFirst() { return this.items[0]?.value ?? null },
        initialValue() {
            if (this.defaultValue != null && this.items.some(i => i.value === this.defaultValue)) return this.defaultValue
            if (this.autoSelectFirst) return this.safeFirst
            return null
        },
        currentValue() {
            // 컨트롤드면 modelValue, 아니면 내부 상태
            const raw = this.isControlled ? this.modelValue : this.innerValue
            // 목록에 없는 값이면 안전하게 교체
            return this.items.some(i => i.value === raw) ? raw : this.safeFirst
        },
        currentIndex() { return this.items.findIndex(i => i.value === this.currentValue) },
        activeComp() { 
            const comp = this.items.find(i => i.value === this.currentValue)?.component
            return comp ? markRaw(comp) : null 
        },
    },
    methods: {
        setBtnRef(el) { if (el && !this.btnRefs.includes(el)) this.btnRefs.push(el) },
        select(value) {
            if (this.isControlled) {
                if (value === this.modelValue) return
                this.$emit('update:modelValue', value)
            } else {
                if (value === this.innerValue) return
                this.innerValue = value
            }
            this.$emit('change', value)
        },
        focusIndex(idx) {
            const list = this.btnRefs; if (!list.length) return
            const i = (idx + list.length) % list.length
            this.$nextTick(() => list[i]?.focus?.())
        },
        onKeydown(e) {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return
            const cur = this.currentIndex
            if (e.key === 'ArrowLeft') { e.preventDefault(); this.focusIndex(cur - 1) }
            if (e.key === 'ArrowRight') { e.preventDefault(); this.focusIndex(cur + 1) }
            if (e.key === 'Home') { e.preventDefault(); this.focusIndex(0) }
            if (e.key === 'End') { e.preventDefault(); this.focusIndex(Number.POSITIVE_INFINITY) }
        },
        ensureValidSelection() {
            // 컨트롤드: 부모가 이상한 값을 주면 첫 항목으로 교정 이벤트
            if (this.isControlled) {
                if (!this.items.some(i => i.value === this.modelValue)) {
                    const v = this.initialValue
                    if (v != null) this.$emit('update:modelValue', v)
                }
            } else {
                // 언컨트롤드: 내부 상태 초기화
                if (!this.items.some(i => i.value === this.innerValue)) {
                    this.innerValue = this.initialValue
                }
            }
        }
    },
    mounted() { this.ensureValidSelection() },
    updated() { this.ensureValidSelection() },
    beforeUpdate() { this.btnRefs = [] }, // ref 중복 방지
    components: { FallbackPanel }
}
</script>