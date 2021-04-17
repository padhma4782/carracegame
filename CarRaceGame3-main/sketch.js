var database;
var position;
var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4;
var cars=[];
var car1Image, car2Image, car3Image, car4Image;
var groundImage, trackImage;
var carsAtEnd = 0;

function preload(){

  car1Image = loadImage("images/car1.png");
  car2Image = loadImage("images/car2.png");
  car3Image = loadImage("images/car3.png");
  car4Image = loadImage("images/car4.png");
  groundImage = loadImage("images/ground.png");
  trackImage = loadImage("images/track.jpg");

}

function setup(){
  database = firebase.database();
  console.log("connected to database");
  createCanvas(displayWidth,displayHeight);

  game = new Game();
  game.getgameState();

  game.start();

  //gameState = 1;
  //game.setgameState();
}

function draw(){
  background("white");
  console.log("gameState in draw: ", gameState);

  if(playerCount === 4 && gameState === 0){
    gameState = 1;
    game.setgameState(1);
  }
  
  if(gameState === 1){
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

}