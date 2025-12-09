<template>
    <div class="k-checkbox" v-if="type == 'default'">
        <label>
            <Icon18CheckboxActive v-if="isChecked" :width="18" :height="18" />
            <Icon18CheckboxDefault v-else :width="18" :height="18" />
            <input type="checkbox" :name="name" v-model="isChecked" hidden>
            <span>
                <slot></slot>
            </span>
        </label>
    </div>
    <div class="k-checkbox type-image" v-else-if="type == 'image'">
        <label>
            <Icon18CheckboxActive v-if="isChecked" :width="18" :height="18" />
            <Icon18CheckboxDefault v-else :width="18" :height="18" />
            <input type="checkbox" :name="name" v-model="isChecked" hidden>
            <img :src="src" :alt="alt">
        </label>
    </div>
    <div class="k-checkbox type-file" v-else-if="type == 'file'">
        <label>
            <Icon18CheckboxActive v-if="isChecked" :width="18" :height="18" />
            <Icon18CheckboxDefault v-else :width="18" :height="18" />
            <input type="checkbox" :name="name" v-model="isChecked" hidden>
            <div class="file-info">
                <component :is="fileIconComponent" :width="28" :height="28" />
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
            <Icon18CheckboxActive v-if="isChecked" :width="18" :height="18" />
            <Icon18CheckboxDefault v-else :width="18" :height="18" />
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
    // 18px 체크박스 아이콘들 import
    import Icon18CheckboxActive from '@/assets/icons/18/ic-checkbox-active.svg'
    import Icon18CheckboxDefault from '@/assets/icons/18/ic-checkbox-default.svg'
    
    // 28px 파일 아이콘들 import
    import Icon28Pdf from '@/assets/icons/28/ic-pdf.svg'
    import Icon28Excel from '@/assets/icons/28/ic-excel.svg'
    import Icon28Ppt from '@/assets/icons/28/ic-ppt.svg'
    import Icon28Word from '@/assets/icons/28/ic-word.svg'
    import Icon28ImgLine from '@/assets/icons/28/ic-img-line.svg'
    import Icon28VideoLine from '@/assets/icons/28/ic-video-line.svg'
    import Icon28PdfLine from '@/assets/icons/28/ic-pdf-line.svg'
    import Icon28DownloadLine from '@/assets/icons/28/ic-download-line.svg'

    export default {
        name: 'AppCheckbox',
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
        },
        computed: {
            fileIconComponent() {
                // 파일 타입별 아이콘 맵
                const fileIconMap = {
                    'pdf': Icon28Pdf,
                    'excel': Icon28Excel,
                    'xls': Icon28Excel,
                    'xlsx': Icon28Excel,
                    'ppt': Icon28Ppt,
                    'pptx': Icon28Ppt,
                    'word': Icon28Word,
                    'doc': Icon28Word,
                    'docx': Icon28Word,
                    'jpg': Icon28ImgLine,
                    'jpeg': Icon28ImgLine,
                    'png': Icon28ImgLine,
                    'gif': Icon28ImgLine,
                    'img': Icon28ImgLine,
                    'mp4': Icon28VideoLine,
                    'avi': Icon28VideoLine,
                    'mov': Icon28VideoLine,
                    'video': Icon28VideoLine,
                    'pdf-line': Icon28PdfLine,
                    'download': Icon28DownloadLine,
                };
                
                const lowerFiletype = (this.filetype || '').toLowerCase();
                return fileIconMap[lowerFiletype] || Icon28DownloadLine;
            }
        }
    }
</script>