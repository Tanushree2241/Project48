class Form {
constructor() {
    this.button = createButton("Dice");
    this.diceNumber1 = createElement("h1");
    this.player1Spot = createElement("h2");
    this.player2Spot = createElement("h2");
    this.blueColor = createElement("h3");
    this.greenColor = createElement("h3");
    this.i = 1;
}

display() {
  this.button.position(width+100,100);
  this.button.style('color', 'yellow');
  this.button.style('font-size', '100px');
  this.button.style('width', '220px');
  this.button.style('height', '200px');
  //this.button.style('background-color', 'green');

  var player1Score = player1.spot+1;
  var player2Score = player2.spot+1;

    this.player1Spot.html("Player1 : " + player1Score);
    this.player1Spot.position(width+500,200);
    this.player1Spot.style('font-size', '30px');

    this.player2Spot.html("Player2 : " + player2Score);
    this.player2Spot.position(width+500,250);
    this.player2Spot.style('font-size', '30px');

    this.blueColor.html(" (Blue)" );
    this.blueColor.position(width+675,205);
    this.blueColor.style('font-size', '25px');

    this.greenColor.html(" (Pink)" );
    this.greenColor.position(width+675,255);
    this.greenColor.style('font-size', '25px');

  this.button.mousePressed(()=>{ 

   if(this.i===1){
    player1.roll(tiles);
    this.player1Spot.style('color' , 'red');
    this.player2Spot.style('color' , 'black');
    this.i=2;
   }else{
     player2.roll(tiles);
     this.player2Spot.style('color' , 'red');
     this.player1Spot.style('color' , 'black');
     this.i=1;
   }
  
    this.diceNumber1.html(player1.dicenumber);
    this.diceNumber1.position(width+500,50);
    this.diceNumber1.style('font-size', '80px');
  });
}

}