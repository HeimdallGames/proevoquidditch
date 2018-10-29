ProEvolutionQuidditch.introState = function(game) {

};

ProEvolutionQuidditch.introState.prototype = {

    preload: function() {

    },

    create: function() {
        var background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        background.anchor.set(0.5);
        var referee = game.add.sprite(game.world.centerX, 0.8*game.world.centerY, 'referee');
        referee.anchor.set(0.5);
        var text = game.add.sprite(game.world.centerX, 1.6*game.world.centerY,"cleangame");
        text.anchor.set(0.5);
        text.scale.setTo(.5, .5);
        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
        if (spaceKey.isDown)
        {
            game.state.start("levelState");
        }
    }
};