<template>
    <div class="k-tabs">
        <!-- 탭 버튼 영역 -->
        <div class="k-tabs__list" :class="[variant && `type-${variant}`]" role="tablist" aria-orientation="horizontal" @keydown="onKeydown">
            <button v-for="it in items" :key="it.page" ref="setBtnRef" class="k-tab" role="tab" type="button"
                :aria-selected="modelValue === it.page ? 'true' : 'false'" :tabindex="modelValue === it.page ? 0 : -1"
                @click="select(it.page)">
                {{ it.label }}
            </button>
        </div>

        <!-- 탭 패널 -->
        <div class="k-tabs__panel" role="tabpanel">
            <!-- active된 page에 해당하는 컴포넌트 동적 렌더 -->
            <component :is="getActiveComponent()" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'KTabs',
    props: {
        modelValue: { type: [String, Number], required: true },
        /**
         * [{ label: '개요', page: 'overview' }, { label: '통계', page: 'stats' }, ...]
         */
        items: {
            type: Array,
            required: true,
            validator: (arr) => arr.every(x => 'label' in x && 'page' in x),
        },
        /**
         * panels 객체 - { overview: OverviewTab, stats: StatsTab, settings: SettingsTab }
         */
        panels: {
            type: Object,
            required: true,
        },
        variant: {
            type: String,
            default: '',
            validator: (v) => ['', 'filled', 'text'].includes(v),
        },
    },
    emits: ['update:modelValue', 'change'],
    data() {
        return { btnRefs: [] };
    },
    methods: {
        setBtnRef(el) {
            if (el) this.btnRefs.push(el);
        },
        select(page) {
            if (page === this.modelValue) return;
            this.$emit('update:modelValue', page);
            this.$emit('change', page);
        },
        focusIndex(idx) {
            const list = this.btnRefs;
            if (!list.length) return;
            const i = (idx + list.length) % list.length;
            this.$nextTick(() => list[i]?.focus?.());
        },
        onKeydown(e) {
            const current = this.items.findIndex(it => it.page === this.modelValue);
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.focusIndex(current - 1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.focusIndex(current + 1);
            } else if (e.key === 'Home') {
                e.preventDefault();
                this.focusIndex(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                this.focusIndex(Number.POSITIVE_INFINITY);
            }
        },
        getActiveComponent() {
            return this.panels[this.modelValue] || null;
        },
    },
};
</script>