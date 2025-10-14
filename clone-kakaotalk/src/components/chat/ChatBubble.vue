<template>
    <div class="chat-bubble">
        <div :class="classes">
            <div class="info">
                <div class="check">1</div>
                <div class="timestamp">{{ time }}</div>
            </div>
            <div v-if="type === 'text'">
                <div class="content type-text">
                    <i class="icon ic-chat">
                        <svg viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.063 1.743L1.669 7.498C1.025 8.077 0 7.62 0 6.755V1C0 .448.448 0 1 0h6.394c.916 0 1.35 1.13.669 1.743z" fill="black"/></svg>
                    </i>
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
                </div>
            </div>
            <div v-else-if="type === 'emoji'">
                <div class="content type-emoji">
                    <img :src="src" :alt="alt">
                </div>

                <div class="content type-text" v-if="message">
                    <i class="icon ic-chat">
                        <svg viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.063 1.743L1.669 7.498C1.025 8.077 0 7.62 0 6.755V1C0 .448.448 0 1 0h6.394c.916 0 1.35 1.13.669 1.743z" fill="black"/></svg>
                    </i>
                    <p v-html="formattedMessage"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChatBubble',
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
            }
        },
        computed: {
            classes() {
                if (this.sender === 'me') {
                    return ['send', 'send-me'];
                } else {
                    return ['send', 'send-other'];
                }
            },
            time: {
                get() {
                    return this.timestamp.split(' ')[1];
                }
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
            }
        }
    }
</script>