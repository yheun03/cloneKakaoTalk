<template>
    <div class="component-view">
        <h1>컴포넌트 모음</h1>
        <h2>UI 컴포넌트</h2>
        <h3>Button</h3>
        <KButton>버튼</KButton>
        <KButton color="primary">버튼</KButton>
        <KButton disabled>버튼</KButton>
        <KButton type="round">버튼</KButton>
        <KButton color="primary" type="round">버튼</KButton>
        <KButton disabled type="round">버튼</KButton>

        <h3>Input</h3>
        <KInput />
        <KInput value="test" />
        <KInput :maxlength="10" />
        <KInput placeholder="placeholder" />
        <KInput showSelect />
        <KInput showSelect placeholder="placeholder" />

        <!-- <h3>Select</h3>
        <KSelect>선택</KSelect>
        <KSelect color="primary">선택</KSelect>
        <KSelect disabled>선택</KSelect>
        <KSelect type="round">선택</KSelect>
        <KSelect color="primary" type="round">선택</KSelect>
        <KSelect disabled type="round">선택</KSelect> -->
    </div>
</template>

<script>
    import KButton from '@/components/ui/Button.vue'
    import KInput from '@/components/ui/Input.vue'
    // import KSelect from '@/components/ui/Select.vue'
    export default {
        name: 'ComponentView',
        components: {
            KButton,
            KInput,
            // KSelect
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        font: 700 24px/normal "Pretendard";
        color: #fff;
    }

    h2{
        font: 700 18px/normal "Pretendard";
        color: #fff;
        margin-block: 32px 24px;
    }
    h3{
        font: 700 16px/normal "Pretendard";
        color: #fff;
        margin-block: 24px 16px;
    }
</style>