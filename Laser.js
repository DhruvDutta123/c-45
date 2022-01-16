class Laser{
    constructor(x,y){
    this.x=x;
    this.y=y;
    this.r=5;//radius
    this.diameter=r*2//diameter
    this.toDelete = false;
    this.img=loadImage('Missile-Background-PNG.png');
    }

    display(){
     noStroke();
     fill("red");
     image(this.img,this.x,this.y,this.width,this.height);
     ellipse(this.x,this.y,this.diameter,this.diameter)
    }

    move(){
    this.y= this.y - 20;
    }
 //lasers touching enemy or not
    hits(enemy){
        var d=distance(this.x,this.y,enemy.x,enemy.y);
        if(d < this.r + enemy.radius){
            return true;
        }else{
            return false;
        }
    }

    remove(){
    this.toDelete = true;
    }
}