class Form{
    constructor(){
        this.input = createInput("Escribe tu nombre");
        this.button = createButton("play");
        this.h3 = createElement("h3");
    }
    hide(){
     this.input.hide();
     this.button.hide();
     this.h3.hide();
    }
    display(){
        var title = createElement('h2');
        title.html(".crazyGames");
        title.position(displayWidth/2-50,0);

        this.input = createInput("Escribe tu nombre");
        this.button = createButton("play");
        
        this.input.position(displayWidth/2-40,displayHeight-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount
        player.update();
        player.updateCount(playerCount);
        this.h3.html("Hola " + player.name);
        this.h3.position(displayWidth/2-70,displayHeight/4);
        });
    }
}