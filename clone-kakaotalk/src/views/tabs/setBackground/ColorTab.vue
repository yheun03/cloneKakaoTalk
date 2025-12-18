<template>
    <div class="colorTab-tab">
        <app-radio type="palette" :color="color" v-for="color in colors" :key="color" />
    </div>
</template>

<script>
import AppRadio from '@/components/ui/AppRadio.vue'
export default {
    name: 'ColorTab',
    components: {
        AppRadio
    },
    data() {
        return {
            colors: ['#d2ac5f', '#edb5c8', '#e69199', '#ed737f', '#b6a4eb', '#d5c6ae', '#b6b6b6', '#bfaeb3', '#cbaaa9', '#bcae9f', '#a4b3a7', '#5bb2cb', '#86abd6', '#51b38c', '#acae8f', '#998dbd', '#4184dd', '#818a9b', '#888888', '#5a5a5a', '#4c597a', '#393568', '#493a32', '#333333', '2b3344']
        }
    }
}
</script>
<style lang="scss" scoped>
.colorTab-tab{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
}
</style>