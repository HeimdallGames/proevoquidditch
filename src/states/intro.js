ProEvolutionQuidditch.introState = function(game) {

}

ProEvolutionQuidditch.introState.prototype = {

    preload: function() {

    },

    create: function() {
        var referee = game.add.sprite(80, 0, 'referee');
        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {
        if (spaceKey.isDown)
        {
            game.state.start("levelState");
        }
    }
}