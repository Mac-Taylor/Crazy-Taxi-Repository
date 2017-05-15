// App.js file

window.addEventListener('load', function (){

    let GamePlayView = require('./views/play');
    let GamePlayModel = require('./models/taxi');

    let game = new GamePlayModel();
    game.taxiX = 4;
    game.taxiY = 6;
    game.gas = 10;

    let view = new GamePlayView({
        el: document.querySelector('main'),
        model: game,
    });
    view.render();
});