class Polygon{
    constructor(x,y,radius){

        polygon=Bodies.circle(50,200,20);

        World.add(world,polygon);
    
      catapult=new catapult(this.polygon)
    

    }

  
  display(){


    imageMode(CENTER);
  image(polygon_img,polygon.polygon.x,polygon.polygon.y);


  }
  
















}