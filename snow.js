class Snow{
    constructor(x,y)
    {
        var options={
           
    restritution:0.3,
            friction:0.001,
           

        }
        this.x=x;
        this.y=y;
        this.r=7;
        this.body=Bodies.circle(x,y,r,options);
    this.image=loadImage("snow4.webp")
        World.add(world, this.body);

    }
    update(){
        if(this.body.position.y>height)
        Matter.Body.setPosition(this.body, {x:random(0,1366), y:random(0,625)})
    }
    display()
    {
        var ballpos=this.body.position;
        
       
       fill("black")
        imageMode(CENTER)
       image(this.image,ballpos.x,ballpos.y,this.r,this.r)

        
    }
}