<template>
    <i class="k-icon">
        <img :width="iconSize" :height="iconSize" :src="require(`@/assets/icons/${iconSize}/${icon}.svg`)" :alt="icon">
    </i>
</template>

<script>
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
    }
}
</script>