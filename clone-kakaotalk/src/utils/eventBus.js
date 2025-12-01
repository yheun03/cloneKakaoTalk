// 간단한 이벤트 버스
class EventBus {
    constructor() {
        this.events = {}
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    }

    off(event, callback) {
        if (this.events[event]) {
            if (callback) {
                this.events[event] = this.events[event].filter(cb => cb !== callback)
            } else {
                delete this.events[event]
            }
        }
    }

    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data))
        }
    }
}

const eventBus = new EventBus()

export default eventBus

