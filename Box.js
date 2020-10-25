class Box{
    constructor(x,y){
        this.visibility = 255;
        this.body=Bodies.rectangle(x,y,20,20);
        this.image = loadImage("download.jpg")
World.add(world,this.body,this.image)
    }
    display(){
        if(this.body.speed<2.5){
        var position=this.body.position
        var angle =this.body.angle;
        push()
        rectMode(CENTER);
        fill("red")
        translate(position.x,position.y)
        angleMode(RADIANS)
        rotate(angle)
        //rect(0,0,20,20);
        image(this.image,0,0,20,20)
pop()
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility = this.visibility - 5;
            tint(255,this.visibility)
            image(this.image,this.body.x,this.body.y,20,20)
            pop(); 
        } 
    }
}