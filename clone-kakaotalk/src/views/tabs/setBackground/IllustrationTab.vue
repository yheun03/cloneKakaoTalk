<template>
    <div class="illustrationTab-tab">
        <app-radio type="illustration" :src="illustration.src" :alt="illustration.alt" v-for="illustration in illustrations" :key="illustration.src" />
    </div>
</template>

<script>
import AppRadio from '@/components/ui/AppRadio.vue'
export default {
    name: 'IllustrationTab',
    components: {
        AppRadio
    },
    data() {
        return {
            illustrations: [
                {
                    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
                    alt: '산과 호수 배경화면 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
                    alt: '잔잔한 바다 풍경 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
                    alt: '노을 지는 숲 속 길 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80',
                    alt: '파란 하늘과 구름 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=800&q=80',
                    alt: '꽃이 핀 들판 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
                    alt: '안개 낀 산맥 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
                    alt: '분홍색 꽃과 녹색 배경 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
                    alt: '햇살이 비치는 숲 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
                    alt: '파도치는 바다 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=800&q=80',
                    alt: '초록색 식물들 (무료 Unsplash)'
                },
                {
                    src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80',
                    alt: '가을의 단풍나무 (무료 Unsplash)'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.illustrationTab-tab{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
}
</style>