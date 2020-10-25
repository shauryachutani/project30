class Player{
    constructor(x,y){
        
        this.body=Bodies.rectangle(x,y,20,20)
        this.image = loadImage("hexagon.png")
World.add(world,this.body)
    }
    display(){
        var position=this.body.position
        var angle =this.body.angle;
        push()
        rectMode(CENTER);
        fill("blue")
        translate(position.x,position.y)
        angleMode(RADIANS)
        rotate(angle)
        rect(0,0,20,20);
     
pop()
        
    }
}