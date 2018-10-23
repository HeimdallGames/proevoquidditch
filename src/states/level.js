ProEvolutionQuidditch.levelState = function(game) {

}
    //Variables de control
    var upKey;
    var downKey;
    var rightKey;
    var downKey;

    //Variables de objetos
    var harry;
    var snitch;
ProEvolutionQuidditch.levelState.prototype = {

    preload: function() {
        
        harry=game.add.sprite(40,40,'harry');
        game.physics.enable(harry,Phaser.Physics.ARCADE);

        snitch=game.add.sprite((Math.random()*(700-100)+100),(Math.random()*(500-100)+100),'snitch');
        game.physics.enable(snitch,Phaser.Physics.ARCADE);
    },

    create: function() {
        upKey=game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey=game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        rightKey=game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        leftKey=game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    },

    update: function() {
        
        if(upKey.isDown){
            harry.y--;
        }else if(downKey.isDown){
            harry.y++;
        }
        if(rightKey.isDown){
            harry.x++;
        }else if(leftKey.isDown){
            harry.x--;
        }
        
        if(harry.check)
    }

}