
let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#grid-template').innerHTML,

    bindings: {
        'model.taxiX': '.x-value',
        'model.taxiY': '.y-value',
        'model.gas': '.gasoline', // need to make it so that gas can't drop below 0.
    },

    events: {
        'click .leftbutton': 'moveLeft',
        'click .rightbutton': 'moveRight',
        'click .upbutton': 'moveUp',
        'click .downbutton': 'moveDown',
    },

    /** 
     * MAC WHAT ARE YOU TRYING TO DO? 
     * 
     * Ok, you're going to need to select which row (related to Y-coordinate number, counterintuitive) 
     * and which cell in that row (related to x-coordinate value) needs to have a highlighted background.
     * It feels like some sort of styling is requried, but since styling isn't required there has to be another
     * way..≥.
     * 
     * some kind of concatenation when selecting the class maybe? like '.row' + taxiY as well as
     * '.cell' + taxiX. 
     * 
     * How are you going to do that? 
     * 
     */

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
        console.log('Moved Down!')
    },
    whereAreYou: function (x, y) {
        let row = '.row' + y;
        let column = '.cell' + x;
        return row + ' ' + column;
    },
    highlight: function () {
        document.querySelector(this.whereAreYou(this.model.taxiX, this.model.taxiY)).classList.add('taxi-location');
    },
    render: function () {
        console.log('Render!');
        this.renderWithTemplate();
    },
});
