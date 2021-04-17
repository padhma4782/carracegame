class Game{

constructor(){



}

getgameState(){

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val();
        console.log("Gamestate " + gameState);
    });

}

setgameState(state){

    var gameStateRef = database.ref('/');
    gameStateRef.update({

        gameState: state

    });

}

start(){

    form = new Form();
    player = new Player();
    form.display();
    player.getPlayerCount();

    car1 = createSprite(100, 200);
    car1.addImage("player1", car1Image);

    car2 = createSprite(300, 200);
    car2.addImage("player2", car2Image);

    car3 = createSprite(500, 200);
    car3.addImage("player3", car3Image);

    car4 = createSprite(700, 200);
    car4.addImage("player4", car4Image);

    cars=[car1, car2, car3, car4];

}

play(){

    form.hide();

    background(groundImage);

    textSize(30);
    text("GAME HAS STARTED", 60, 100);
    player.getplayerRank();
    Player.getPlayerDetails();
    //console.log("All player: "+allPlayers);

    if(keyIsDown(UP_ARROW) && player.index != null){
        player.distance+=50;
        player.updatePlayerDetails();
    }
    
    image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5);

    if(allPlayers !== undefined){

        var index = 0;
        var carIndex = 0;
        var x = 150;
        var y = 0;

        //Player.getPlayerRank();
        //console.log("Get Player Rank: "+player.rank);    

        for(var plr in allPlayers){
            carIndex = index;
            index+=1;
            //console.log("carIndex: "+carIndex);
            //console.log("Index: "+index);
            //console.log("playerIndex: "+player.index);
            x = x+200;
            y = displayHeight-allPlayers[plr].distance-20;
            cars[carIndex].x = x;
            cars[carIndex].y = y;
            if(index===player.index){
                stroke(10);
                fill("green");
                ellipse(x, y, 100, 100);
                text(allPlayers[plr].name + ":"+allPlayers[plr].distance, x-70, y+100);
                console.log(allPlayers[plr].name + ":"+allPlayers[plr].distance);
                cars[carIndex].shapeColor = "green";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[carIndex].y;
            }
            
        }

    }

    if(player.distance > 3650){
        gameState = 2;
        console.log("gameState in play: ", gameState);
        //this.setgameState(2);
        //player.rank=player.rank+1;
       // player.updatePlayerRank();
       player.rank =player.rank+1;
        
       Player.updateplayerRank(player.rank)
    }

    drawSprites();

}

end(){

    console.log("Rank: "+player.rank);
    console.log("GAME ENDED!");

}

}