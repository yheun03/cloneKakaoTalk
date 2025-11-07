<template>
    <i class="k-icon">
        <img v-if="iconSrc" :width="iconSize" :height="iconSize" :src="iconSrc" :alt="icon">
    </i>
</template>

<script>
const iconContext = require.context('@/assets/icons', true, /\.svg$/);

export default {
    name: 'KIcon',
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
            const iconPath = `./${this.iconSize}/${this.icon}.svg`;
            try {
                const keys = iconContext.keys();
                const found = keys.find(key => key === iconPath);
                if (found) {
                    return iconContext(found);
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