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

    //Variables
    var celerity;
    var points;
    var tPoints; //Texto para los puntos

ProEvolutionQuidditch.levelState.prototype = {

    preload: function() {
        game.load.image('harry', '../assets/images/harry.png');
        game.load.image('snitch', '../assets/images/snitch.png');
    },

    create: function() {
        celerity=3;
        points=0;
        harry=game.add.sprite(40,40,'harry');
        game.physics.enable(harry,Phaser.Physics.ARCADE);
        harry.body.collideWorldBounds=true;
        snitch=game.add.sprite((Math.random()*(700-100)+100),(Math.random()*(500-100)+100),'snitch');
        game.physics.enable(snitch,Phaser.Physics.ARCADE);

        upKey=game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey=game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        rightKey=game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        leftKey=game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        tPoints = game.add.text(40,50, 'Points: ');
        tPoints.fill = '#ffffff';
    },
    update: function() {
        
        if(upKey.isDown){
            harry.y-=celerity;
        }else if(downKey.isDown){
            harry.y+=celerity;
        }
        if(rightKey.isDown){
            harry.x+=celerity;
        }else if(leftKey.isDown){
            harry.x-=celerity;
        }
        function colision(){
            points+=150;
            tPoints.text='Points: '+points;
            
            
        }
        game.physics.arcade.collide(harry,snitch,colision,null,game);
        

        if(points>=150){
            game.state.start('endingState');
        }
        
    }

}