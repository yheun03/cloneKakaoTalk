<template>
    <div class="k-checkbox" v-if="type == 'default'">
        <label>
            <KIcon :icon="isChecked ? 'ic-checkbox-active' : 'ic-checkbox-default'" iconSize="18"></KIcon>
            <input type="checkbox" :name="name" v-model="isChecked" hidden>
            <span>
                <slot></slot>
            </span>
        </label>
    </div>
    <div class="k-checkbox type-image" v-else-if="type == 'image'">
        <label>
            <KIcon :icon="isChecked ? 'ic-checkbox-active' : 'ic-checkbox-default'" iconSize="18"></KIcon>
            <input type="checkbox" :name="name" v-model="isChecked" hidden>
            <img :src="src" :alt="alt">
        </label>
    </div>
    <div class="k-checkbox type-file" v-else-if="type == 'file'">
        <label>
            <KIcon :icon="isChecked ? 'ic-checkbox-active' : 'ic-checkbox-default'" iconSize="18"></KIcon>
            <input type="checkbox" :name="name" v-model="isChecked" hidden>
            <div class="file-info">
                <img :src="require(`@/assets/icons/28/ic-${filetype}.svg`)" :alt="`${filetype} 파일 아이콘`">
                <div>
                    <p class="f-name">{{ filename }}.{{ filetype }}</p>
                    <p class="f-period">유효기간 {{ period }}</p>
                    <p class="f-size">{{ filesize }}</p>
                </div>
            </div>
        </label>
    </div>
    <div class="k-checkbox type-link" v-else-if="type == 'link'">
        <label>
            <KIcon :icon="isChecked ? 'ic-checkbox-active' : 'ic-checkbox-default'" iconSize="18"></KIcon>
            <input type="checkbox" :name="name" v-model="isChecked" hidden>
            <img :src="linkThumbnail" :alt="linkTitle">
            <div class="link-info">
                <p class="l-title">{{ linkTitle }}</p>
                <p class="l-dscpt">{{ linkDescription }}</p>
                <a class="l-href" :href="linkUrl" target="_blank">{{ linkUrl }}</a>
            </div>
        </label>
    </div>
</template>

<script>
    import KIcon from './Icon.vue';

    export default {
        name: 'KCheckbox',
        components: {
            KIcon
        },
        props: {
            type: {
                type: String,
                default: 'default',
                validator: value => ['default', 'image', 'image-bg', 'file', 'link', 'illustration'].includes(value)
            },
            name: {
                type: String,
                default: ''
            },
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            filename: {
                type: String,
                default: ''
            },
            filetype: {
                type: String,
                default: ''
            },
            period: {
                type: String,
                default: ''
            },
            filesize: {
                type: String,
                default: ''
            },
            linkThumbnail: {
                type: String,
                default: ''
            },
            linkTitle: {
                type: String,
                default: ''
            },
            linkDescription: {
                type: String,
                default: ''
            },
            linkUrl: {
                type: String,
                default: ''
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isChecked: this.value
            }
        },
        watch: {
            value(newVal) {
                this.isChecked = newVal;
            },
            isChecked(newVal) {
                this.$emit('input', newVal);
            }
        }
    }
</script>