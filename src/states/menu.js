ProEvolutionQuidditch.menuState = function(game) {

}

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {
        game.load.image('background','assets/images/background/background.png');
        game.load.image('harry','assets/images/harry.png' );
        game.load.image('draco','..\assets\images\draco');
        game.load.image('griffindor','assets/images/griffindor.png');
        game.load.image('snitch','..\assets\images\snitch');
        game.load.image('title','..\assets\images\text\title');
        game.load.image('start','..\assets\images\text\start');
        
    },

    create: function() {
       var backImage = game.add.sprite(0,0,'background');
       var harry = game.add.sprite(50,250,'harry');
       var harry2 = game.add.sprite(500,250,'harry');
       var griffindor = game.add.sprite(350, 250 , 'griffindor');

       harry2.setAttribute('style','transform:rotate(180deg)');

    
      
    },

    update: function() {

    }
}