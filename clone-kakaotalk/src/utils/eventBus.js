// 간단한 이벤트 버스
class EventBus {
    constructor() {
        this.events = {}
        this.lastValues = {} // 마지막으로 emit된 값 저장
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
        
        // 마지막 값이 있으면 즉시 호출
        if (this.lastValues[event] !== undefined) {
            callback(this.lastValues[event])
        }
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
        // 마지막 값 저장
        this.lastValues[event] = data
        
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data))
        }
    }

    getLastValue(event) {
        return this.lastValues[event]
    }
}

const eventBus = new EventBus()

export default eventBus

