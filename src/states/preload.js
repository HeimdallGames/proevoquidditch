ProEvolutionQuidditch.preloadState = function(game) {

}

ProEvolutionQuidditch.preloadState.prototype = {

    

    preload: function () {
        
        game.load.image('loading1', '../assets/images/text/loading1.png');
        game.load.image('loading2', '../assets/images/text/loading2.png');
        game.load.image('cleangame', '../assets/images/text/cleangame.png');
        game.load.image('player1', '../assets/images/text/player 1.png');
        game.load.image('player2', '../assets/images/text/player2.png');
        game.load.image('press1', '../assets/images/text/press1.png');
        game.load.image('press2', '../assets/images/text/press2.png');
        game.load.image('return', '../assets/images/text/return.png');
        game.load.image('start', '../assets/images/text/start.png');
        game.load.image('title', '../assets/images/text/title.png');
        game.load.image('vs', '../assets/images/text/vs.png');
        game.load.image('winner', '../assets/images/text/winner.png');


        game.load.image('background', '../assets/images/background/background.png');
        game.load.image('background2', '../assets/images/background/background2.png');
        game.load.image('stadium1', '../assets/images/background/stadium1.png');
        game.load.image('stadium2', '../assets/images/background/stadium2.png');
        game.load.image('stadium3', '../assets/images/background/stadium3.png');
        game.load.image('stadium4', '../assets/images/background/stadium4.png');

        game.load.image('draco', '../assets/images/draco.png');
        game.load.image('griffindor', '../assets/images/griffindor.png');
        game.load.image('harry', '../assets/images/harry.png');
        game.load.image('referee', '../assets/images/referee.png');
        game.load.image('slytherin', '../assets/images/slytherin.png');
        game.load.image('snitch', '../assets/images/snitch.png');
        game.load.image('trophy', '../assets/images/trophy.png');
    },

    var harry;

    create: function () {
        var text = "LOADING...";
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

        harry = game.add.sprite(200, 200, 'harry');
        bot.animations.add('run');
        bot.animations.play('run', 15, true);

        var t = game.add.text(game.world.centerX - 300, 0, text, style);
       // game.switchState('menuState');
    },

    update: function () {

        harry.x -= 2;

        if (harry.x < -harry.width) {
            harry.x = game.world.width;
        }

    }
}