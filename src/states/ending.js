ProEvolutionQuidditch.endingState = function(game) {

};

ProEvolutionQuidditch.endingState.prototype = {

    preload: function() {
        
    },

    create: function() {
        var background = game.add.sprite(0, 0, 'background2');

        var trophy = game.add.sprite(game.world.centerX-62, game.world.centerY-250, 'trophy');

        var griffindor = game.add.sprite(game.world.centerX-300, game.world.centerY-150, 'griffindor');

        var harry = game.add.sprite(game.world.centerX + 350, game.world.centerY - 150, 'harry');
        harry.scale.x *= -1;

        var returnText = game.add.sprite(game.world.centerX-163, game.world.centerY + 120, 'return');

        var winnerText = game.add.sprite(game.world.centerX-138, game.world.centerY + 55, 'winner');

        winnerText.scale.set(0.6);
        returnText.scale.set(0.3);

        
        returnText.inputEnabled = true;
        returnText.events.onInputDown.add(listener, this);
    },

    update: function() {

    }
};


function listener() {
    game.state.start('menuState');
}