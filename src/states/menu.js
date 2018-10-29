ProEvolutionQuidditch.menuState = function(game) {

}

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {
        game.load.image('background','assets/images/background/background.png');
        game.load.image('harry','assets/images/harry.png' );
        game.load.image('draco','assets/images/draco.png');
        game.load.image('griffindor','assets/images/griffindor.png');
        game.load.image('snitch','assets/images/snitch.png');
        game.load.image('title','assets/images/text/title.png');
        game.load.image('start','assets/images/text/start.png');
        
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
       key1.onDown.game.state.start(game.state.current);

     

    
      
    },

    update: function() {

    }
}