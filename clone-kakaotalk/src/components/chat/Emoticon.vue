<template>
    <div :class="`emoticon emoticon--type-${type}`">
        <img :src="src" :alt="alt">
    </div>
</template>

<script>
    export default {
        name: 'KEmoticon',
        props: {
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'default',
                validator: value => ['default', 'mini', 'kakao'].includes(value)
            }
        }
    }
</script>