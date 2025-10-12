<template>
    <div class="k-radio">
        <div class="k-radio-image" v-if="type == 'image'">
            <div class="item type-image" v-if="src != ''">
                <label>
                    <input type="radio" name="k-radio-image" hidden>
                    <img :src="src" :alt="alt">
                </label>
            </div>
            <div class="item type-file" v-else>
                <label>
                    <input type="file" name="radio" hidden>
                </label>
            </div>
        </div>
        <div class="k-radio-illustration" v-else-if="type == 'illustration'">
            <div class="item">
                <label>
                    <input type="radio" name="k-radio-illustration" hidden>
                    <img :src="src" :alt="alt">
                </label>
            </div>
        </div>
        <div class="k-radio-palette" v-else-if="type == 'palette'">
            <div class="item">
                <label>
                    <input type="radio" name="k-radio-palette-sm" hidden>
                    <div class="color-wrap" :style="`background-color: ${color}`"/>
                </label>
            </div>
        </div>
        <div class="k-radio-palette size-sm" v-else-if="type == 'palette-sm'">
            <div class="item">
                <label>
                    <input type="radio" name="k-radio-palette-sm" hidden>
                    <div class="color-wrap" :style="`background-color: ${color}`"/>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'KRadio',
        props: {
            type: {
                type: String,
                default: 'image',
                validator: value => ['image', 'illustration', 'palette', 'palette-sm'].includes(value)
            },
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            }
        }
    }
</script>