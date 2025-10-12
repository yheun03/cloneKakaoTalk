<template>
    <div class="chat-bubble">
        <div :class="classes">
            <div class="info">
                <div class="check">1</div>
                <div class="timestamp">{{ time }}</div>
            </div>
            <div class="content">
                <i class="icon ic-chat">
                    <svg viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.063 1.743L1.669 7.498C1.025 8.077 0 7.62 0 6.755V1C0 .448.448 0 1 0h6.394c.916 0 1.35 1.13.669 1.743z" fill="black"/></svg>
                </i>
                <p>{{ message }}</p>
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
                validator: value => ['text', 'image', 'file', 'link'].includes(value)
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
            }
        }
    }
</script>