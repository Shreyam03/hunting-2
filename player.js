class Player{
    constructor(x,y)
    {
        this.name=null;
        this.score=0;
        this.ammo=5;
        this.index=null;
        this.image=loadImage("Images/crosshair1.png");
        this.x=x;
        this.y=y;
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,this.x,this.y,60,60);
    }
    
}