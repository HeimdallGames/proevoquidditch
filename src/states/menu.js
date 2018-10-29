ProEvolutionQuidditch.menuState = function(game) {

}

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {
       
        
    },

    create: function() {
       var backImage = game.add.sprite(0,0,'background');
       var harry = game.add.sprite(50,250,'harry');
       //var harry2 = game.add.sprite(500,250,'harry');
       var draco = game.add.sprite(750,250, 'draco');
       draco.scale.x *= -1;
       var griffindor = game.add.sprite(330, 250 , 'griffindor');
       var title = game.add.sprite(30, 140,'title');
       title.scale.set(0.5);
       var start = game.add.sprite(225,500, 'start');
       start.scale.set(0.7);
       var snitch = game.add.sprite(260,0, 'snitch');
       snitch.scale.set(2);



       key1 = game.input.keyboard.addKey(Phaser.Keyboard.S);

     

    
      
    },

    update: function() {
        if(key1.isDown)
        {
            game.state.start('introState');

        }
    }
}