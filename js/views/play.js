
let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#grid-template').innerHTML,

    bindings: {
        'model.taxiX': '',
        'model.taxiY': '',
        'model.gas': ''
    },

    events: {
        'click .leftbutton': 'moveLeft',
        'click .righttbutton': 'moveRight',
        'click .upbutton': 'moveUp',
        'click .downbutton': 'moveDown',
    },

    moveLeft: function () {
        this.model.taxiX = this.model.taxiX - 1;
        this.model.gas = this.model.gas - 1;
        console.log('Moved Left!')
    },
    moveRight: function () {
        this.model.taxiX = this.model.taxiX + 1;
        this.model.gas = this.model.gas - 1;
        console.log('Moved Right!');
    },
    moveUp: function () {
        this.model.taxiY = this.model.taxiY + 1;
        this.model.gas = this.model.gas - 1;
        console.log('Moved Up!');
    },
    moveDown: function () {
        this.model.taxiY = this.model.taxiY - 1;
        this.model.gas = this.model.gas - 1;

    },
});
