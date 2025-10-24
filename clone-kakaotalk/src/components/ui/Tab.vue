<template>
    <div class="k-tabs">
        <!-- 탭 버튼 영역 -->
        <div v-if="type === 'emoji'" class="k-tabs__list" :class="[type && `type-${type}`]" role="tablist" aria-orientation="horizontal" @keydown="onKeydown">
            <button roll="prev button" aria-label="이전 탭">
                <i class="icon ic-arrow-left"></i>
            </button>
            <div class="wrap">
                <button v-for="it in items" :key="it.page" ref="setBtnRef" class="k-tab" role="tab" type="button"
                    :aria-selected="currentValue === it.page ? 'true' : 'false'" :tabindex="currentValue === it.page ? 0 : -1"
                    @click="select(it.page)">
                    <i :style="{ backgroundImage: `url(${it.label})` }" class="k-tab__icon"></i>
                    <span>{{ it.label }}</span>
                </button>
            </div>
            <button roll="next button" aria-label="다음 탭">
                <i class="icon ic-arrow-right"></i>
            </button>
        </div>
        <div v-else class="k-tabs__list" :class="[type && `type-${type}`]" role="tablist" aria-orientation="horizontal" @keydown="onKeydown">
            <button v-for="it in items" :key="it.page" ref="setBtnRef" class="k-tab" role="tab" type="button"
                :aria-selected="currentValue === it.page ? 'true' : 'false'" :tabindex="currentValue === it.page ? 0 : -1"
                @click="select(it.page)">
                <span>{{ it.label }}</span>
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
         * [{ label: '개요', page: OverviewTab }, { label: '통계', page: StatsTab }, ...]
         */
        items: {
            type: Array,
            required: true,
            validator: (arr) => arr.every(x => 'label' in x && 'page' in x),
        },
        type: {
            type: String,
            default: '',
            validator: (v) => ['', 'filled', 'text', 'emoji'].includes(v),
        },
    },
    emits: ['update:modelValue', 'change'],
    data() {
        return { btnRefs: [] };
    },
    computed: {
        currentValue() {
            return this.modelValue || (this.items.length > 0 ? this.items[0].page : null);
        }
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
            const current = this.items.findIndex(it => it.page === this.currentValue);
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
            const activeItem = this.items.find(item => item.page === this.currentValue);
            return activeItem ? activeItem.page : null;
        },
    },
};
</script>