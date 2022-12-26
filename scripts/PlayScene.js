
let graphics

export var PlayScene = {

    create () {
        graphics = this.add.graphics();

        graphics.fillStyle(0xff3300, 1);

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });
    },

    update () {

        graphics.fillRect(Math.random() * 1000, Math.random() * 1000, 1, 1)

    }
}