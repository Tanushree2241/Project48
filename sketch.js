var tiles = [] , tileSize = 90 , rows , column , x , y , dir=1, form , player1 , player2;

function setup() {
  createCanvas(900,900);
 
  rows = height/tileSize;
  column = width/tileSize;

  x=0;
  y=(rows-1)*tileSize;

  for (var j = 0; j <rows*column; j=j+1) 
  {
    tiles.push(new Tiles(x,y,tileSize,j+1,j));  

    x = x+tileSize*dir;

    if(x>=width || x<=-tileSize){
      dir = dir*-1
      y=y-tileSize;
      x=x+tileSize*dir;
    }
  }

  tiles[26].snake=8;
  tiles[90].snake=67;
  tiles[97].snake=45;
  tiles[77].snake=39;
  tiles[46].snake=16;

  tiles[43].ladder = 19;
  tiles[19].doesLadder = true;
  tiles[19].ladderValue = 43;

  tiles[84].ladder=48;
  tiles[48].doesLadder = true;
  tiles[48].ladderValue = 84;

  tiles[32].ladder=9;
  tiles[9].doesLadder = true;
  tiles[9].ladderValue = 32;

  tiles[94].ladder=72;
  tiles[72].doesLadder = true;
  tiles[72].ladderValue = 94;


  tiles[82].ladder=60;
  tiles[60].doesLadder = true;
  tiles[60].ladderValue = 82;

 form = new Form();
 player1 = new Player();
 player1.getName("Player1");

 player2 = new Player();
 player2.getName("Player2");

}

function draw() {
  background(255,255,255); 

  for (var i = 0; i < tiles.length; i++) {
    tiles[i].display(tiles);   
  }

  form.display();
  player1.show(tiles,player1,player2);
  player2.show(tiles,player1,player2);
  
  if(player1.spot === 99 || player2.spot === 99){
    noLoop();
    background("white");
      if(player1.spot === 99){
        fill("yellow");
        textSize(100);
        text("WIN "  +  " Player1" , 200 , 500 );
      }else{
        fill("yellow");
        textSize(100);
        text("WIN  "  +  "  Player2" , 200 , 500 );
      }
  }

 
}

