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
    var back;
    //Variables
    var celerity;
    var points;
    var tPoints; //Texto para los puntos
    var shield;

ProEvolutionQuidditch.levelState.prototype = {

    preload: function() {

    },

    create: function() {
        
        back=game.add.sprite(0,0,'stadium1');
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
        tPoints = game.add.text(70,50, 'Points: ');
        tPoints.fill = '#000000';
        shield=game.add.sprite(30,40,'griffindor');
        shield.width=40;
        shield.height=50;

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
            points+=1;
            tPoints.text='Points: '+points;
            snitch.x=(Math.random()*(700-100)+100);
            snitch.y=(Math.random()*(500-100)+100);
        }
        game.physics.arcade.collide(harry,snitch,colision,null,game);
        

        if(points>=3){
            game.state.start('endingState');
        }
        
    }

}