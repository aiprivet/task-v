class EventEmitter {
    private events: Record<string, Function[]>;

    constructor() {
        this.events = {};
    }

    on(eventName: string, listener: Function): void {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName: string, ...args: any[]): void {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => listener(...args));
        }
    }

    off(eventName: string, listener: Function): void {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(l => l !== listener);
        }
    }
}

export default EventEmitter;
