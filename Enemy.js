class Enemy{
    constructor(x,y,pointsValue){
        this.x=x;
        this.y=y;
        this.width=38;
        this.height=26;
        this.alive=true;
        this.imgA=loadImage("enemy2.png");
        this.imgB=loadImage("enemy3.png");
        this.imgC=loadImage("enemy4.png");
        this.currentImg='A';
        this.pts=pointsValue;
        this.radius=20;
        this.xdir=1;
    }

    display(){
        if(this.currentImg==='A'){
            image(this.imgA,this.x,this.y,this.width,this.height);
        }
        if(this.currentImg==='B'){
            image(this.imgB,this.x,this.y,this.width,this.height);
        }
        if(this.currentImg==='C'){
            image(this.imgC,this.x,this.y,this.width,this.height);
        }
    }


move(){
    this.x=this.x + this.xdir;
    if(this.currentImg==='A'){
        this.currentImg='B';
    }else if(this.currentImg==='B'){
        this.currentImg='C';
    }
}

shDown(){
    this.xdir = -this.xdir;
    this.y = this.y + this.height;
}
}