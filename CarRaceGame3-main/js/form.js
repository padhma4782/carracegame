class Form{

constructor(){

    this.button = createButton('Play');
    this.input = createInput("Name");
    this.greeting = createElement('h3');

    this.button2 = createButton('Reset');

}

display(){

    var title = createElement('h2');
    title.html("Car Race Game");
    title.position(350, 0);
    this.input.position(350, 160);
    this.button.position(350, 200);

    this.button.mousePressed(()=>{
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.updatePlayerDetails();
        player.updatePlayerCount(playerCount);
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello, "+player.name);
        this.greeting.position(350, 160);
    });

    this.button2.position(350, 120);

    this.button2.mousePressed(()=>{
        playerCount=0;
        player.updatePlayerCount(playerCount);

        gameState = 0;
        game.setgameState(0);

        Player.updateplayerRank(0);
                
        player.deletePlayers();

        location.reload();
    });
}

hide(){

    this.button.hide();
    this.input.hide();
    this.greeting.hide();

}

}