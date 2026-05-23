<template>
    <div class="chat-bubble">
        <div :class="classes">
            <div class="info">
                <div class="check">1</div>
                <div class="timestamp" v-if="showTimestamp">{{ time }}</div>
            </div>
            <div v-if="type === 'text'">
                <div class="content type-text">
                    <Icon10Chat :width="10" :height="10" />
                    <p v-html="formattedMessage"></p>
                </div>
            </div>
            <div v-else-if="type === 'image'">
                <div class="content type-image">
                    <img :src="src" :alt="alt">
                </div>
            </div>
            <div v-else-if="type === 'file'">
                <div class="content type-file">
                    <div class="file-info">
                        <div>
                            <p class="f-name">{{ filename }}.{{ filetype }}</p>
                            <p class="f-period">유효기간: ~{{ period }}</p>
                            <p class="f-size">용량: {{ filesize }}</p>
                        </div>
                        <component :is="getFileIconComponent(iconName)" :width="28" :height="28" />
                    </div>
                    <div class="btn-wrap">
                        <app-button type="text" :custom-color="'0B73DC'" @click="handleDownloadFile">
                            저장
                        </app-button>
                        <app-button type="text" :custom-color="'0B73DC'" @click="handleDownloadFile">
                            다운로드
                        </app-button>
                    </div>
                </div>
            </div>
            <div v-else-if="type === 'emoji'">
                <div class="content type-emoji">
                    <img :src="src" :alt="alt">
                </div>

                <div class="content type-text" v-if="message">
                    <Icon10Chat :width="10" :height="10" />
                    <p v-html="formattedMessage"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue'

// 10px 채팅 아이콘들 import
import Icon10Chat from '@/assets/icons/10/ic-chat.svg'

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
    name: 'ChatBubble',
    components: {
        AppButton,
        Icon10Chat
    },
    props: {
        type: {
            type: String,
            default: 'text',
            validator: value => ['text', 'image', 'file', 'emoji'].includes(value)
        },
        sender: {
            type: String,
            default: 'me',
            validator: value => ['me', 'other'].includes(value)
        },
        message: {
            type: String,
            default: ''
        },
        timestamp: {
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
        showTimestamp: {
            type: Boolean,
            default: true
        },
    },
    computed: {
        classes() {
            if (this.sender === 'me') {
                return ['send', 'send-me'];
            } else {
                return ['send', 'send-other'];
            }
        },
        time() {
            if (!this.timestamp) return '';
            
            // timestamp가 Date 객체인 경우
            if (this.timestamp instanceof Date) {
                return this.timestamp.toLocaleTimeString('ko-KR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                });
            }
            
            // timestamp가 문자열인 경우
            const date = new Date(this.timestamp);
            if (isNaN(date.getTime())) {
                // 유효하지 않은 날짜인 경우 원본 반환
                return this.timestamp;
            }
            
            return date.toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
        },
        formattedMessage() {
            if (!this.message) return '';

            const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/gi;

            return this.message.replace(urlRegex, (url) => {
                let href = url;

                // 프로토콜이 없는 경우 https:// 추가
                if (!url.match(/^https?:\/\//i)) {
                    href = `http://${url}`;
                }

                // 표시되는 텍스트는 원본 그대로
                return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="message-link">${url}</a>`;
            });
        },
        iconName() {
            const lower = (this.filetype || '').toLowerCase();
            if (lower === 'pdf') return 'pdf';
            if (lower === 'jpg' || lower === 'png' || lower === 'jpeg') return 'img';
            if (lower === 'avi' || lower === 'mp4' || lower === 'mov') return 'video';
            if (lower === 'mp3' || lower === 'wav' || lower === 'm4a') return 'audio';
            if (lower === 'zip' || lower === '7z' || lower === 'rar') return 'zip';
            if (lower === 'doc' || lower === 'docx' || lower === 'word') return 'word';
            if (lower === 'ppt' || lower === 'pptx' || lower === 'ppt') return 'ppt';
            if (lower === 'xls' || lower === 'xlsx' || lower === 'csv' || lower === 'excel') return 'excel';

            // 존재하지 않는 아이콘 타입은 일반 pdf 아이콘으로 대체
            return 'download';
        }
    },
    methods: {
        getFileIconComponent(iconName) {
            // 파일 타입별 아이콘 맵
            const fileIconMap = {
                'pdf': Icon28Pdf,
                'excel': Icon28Excel,
                'ppt': Icon28Ppt,
                'word': Icon28Word,
                'img': Icon28ImgLine,
                'video': Icon28VideoLine,
                'pdf-line': Icon28PdfLine,
                'download': Icon28DownloadLine,
            };
            
            return fileIconMap[iconName] || Icon28DownloadLine;
        },
        handleDownloadFile() {
            // 파일 다운로드 로직 구현
            console.log('파일 다운로드:', this.filename);
        }
    }
}
</script>