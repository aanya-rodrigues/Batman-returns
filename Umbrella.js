class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        var animate= loadAnimation("Images/Walking Frame/walking_1.png","Images/Walking Frame/walking_2.png","Images/Walking Frame/walking_3.png","Images/Walking Frame/walking_4.png","Images/Walking Frame/walking_5.png","Images/Walking Frame/walking_6.png","Images/Walking Frame/walking_7.png","Images/Walking Frame/walking_8.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        animateMode(CENTER);
        animate(this.image,pos.x,pos.y+70,300,300);
    }
}