class Menu{
    constructor()
    {
        this.heading=createElement("h1");
        this.input1=createInput("Enter Player 1 Name");
        this.input2=createInput("Enter Player 2 Name");
        this.button=createButton("Play");
    }
    reset()
    {
     this.input1.value()="";
     this.input2.value()="";
    }
    display()
    {
        this.heading.html("Hunting Game");
        this.heading.position(width/2-50,height/3);
        this.input1.position(width/2-150,height/2);
        this.input2.position(width/2+50,height/2);
        this.button.position(width/2,height/2+60);
        this.button.mousePressed(
            ()=>
            {
               if(this.input1.value()==="Enter Player 1 Name" || this.input2.value()==="Enter Player 2 Name" || this.input1.value() === ""||this.input2.value()===""){
                    alert("Kindly Enter Both The Names");
               }
               else{
                gameState=2;
                    this.heading.hide();
                    this.input1.hide();
                    this.input2.hide();
                    this.button.hide();
                    player1.name = this.input1.value();
                    player2.name = this.input2.value();
               }

            }
        );

    }
}