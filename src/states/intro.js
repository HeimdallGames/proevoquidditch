ProEvolutionQuidditch.introState = function(game) {

};

ProEvolutionQuidditch.introState.prototype = {

    preload: function() {

    },

    create: function() {
        var background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        background.anchor.set(0.5);
        var referee = game.add.sprite(300, 50, 'referee');
        var text = game.add.sprite(5,400,"cleangame");
        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
        if (spaceKey.isDown)
        {
            game.state.start("levelState");
        }
    }
};