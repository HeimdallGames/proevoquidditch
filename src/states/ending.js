ProEvolutionQuidditch.endingState = function(game) {

};

ProEvolutionQuidditch.endingState.prototype = {

    preload: function() {
        
    },

    create: function() {
        var background = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
        background.anchor.set(0.5);

        var winnerText = game.add.sprite(game.world.centerX, game.world.centerY, 'winner');
        winnerText.anchor.set(0.5);

        var trophy = game.add.sprite(game.world.centerX, game.world.centerY, 'trophy');
        returnText.anchor.set(0.5);

        var griffindor = game.add.sprite(game.world.centerX, game.world.centerY, 'griffindor');
        returnText.anchor.set(0.5);

        var harry = game.add.sprite(game.world.centerX, game.world.centerY, 'harry');
        returnText.anchor.set(0.5);

        var returnText = game.add.sprite(game.world.centerX, game.world.centerY, 'return');
        returnText.anchor.set(0.5);
        returnText.inputEnabled = true;
        returnText.events.onInputDown.add(listener, this);
    },

    update: function() {

    }
};


function listener() {
    game.state.start('menuState');
}