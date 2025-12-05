<template>
    <i class="k-icon">
        <img v-if="iconSrc" :width="iconSize" :height="iconSize" :src="iconSrc" :alt="icon">
    </i>
</template>

<script>
// Vite에서 동적 import를 위한 glob import
const iconModules = import.meta.glob('/src/assets/icons/**/*.svg', { eager: true, query: '?url' });

export default {
    name: 'AppIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        iconSize: {
            type: [String, Number],
            default: '24',
            validator: value => {
                const sizeStr = String(value);
                return ['10', '12', '16', '18', '20', '24', '28', '32'].includes(sizeStr);
            }
        }
    },
    computed: {
        iconSrc() {
            const iconPath = `/src/assets/icons/${this.iconSize}/${this.icon}.svg`;
            try {
                // Vite glob import에서 경로 찾기
                const fullPath = Object.keys(iconModules).find(path => 
                    path.includes(`/${this.iconSize}/${this.icon}.svg`)
                );
                
                if (fullPath && iconModules[fullPath]) {
                    return iconModules[fullPath].default || iconModules[fullPath];
                }
                console.warn(`Icon not found: ${iconPath}`);
                return null;
            } catch (e) {
                console.warn(`Icon not found: ${iconPath}`, e);
                return null;
            }
        }
    }
}
</script>