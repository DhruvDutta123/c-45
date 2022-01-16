class Ship{
constructor(){
this.x=width/2;
this.y=height-10;
this.width=55;
this.height=10;
this.xdir=0;
this.img=loadImage('The fighter plane.png')
}

display(){
fill(255);
noStroke();
image(this.img,this.x,this.y,this.width,this.height);
rect(this.x,this.y,this.width,this.height);
}

move(){
this.x+=this.xdir*10;
}

setDir(dir){
this.xdir=dir;
}
}