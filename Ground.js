class Ground{

    constructor(x,y,width,height){
        
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world,this.body)
    }

    display(){
    push()
        rectMode(CENTER)
        fill("brown")
    rect(this.body.position.x,this.body.position.y,1200,20)
    pop()
    }
    
}