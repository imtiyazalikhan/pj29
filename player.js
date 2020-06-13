class Player extends baseclass{
    constructor(x,y){
        super(x,y,50,50);
        this.image=loadImage("images/player.png");

    }

    display(){
        super.display();   
     }
}