class Hotkey {
    constructor(arg) {
        this.hotkeys = [];

        this.init();
        this.add(arg)
    }

    remove(index) {
        this.hotkeys.splice(index, 1);
    }

    add(arg) {
            this.hotkeys = this.hotkeys.concat(arg)
    }

    checkKey(e) {
        this.hotkeys.forEach(obj => [
            (obj.ctrl && e.ctrlKey) || !obj.ctrl,
            (obj.shift && e.shiftKey) || !obj.shift,
            (obj.alt && e.altKey) || !obj.alt,
            (obj.key == e.code) || !obj.key
            ].every((i) => i == true) && obj.func()
        );
    }

    init() {
        document.addEventListener('keydown', e => this.checkKey(e));
    }
}


