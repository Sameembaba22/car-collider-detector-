var car,  wall;
var weight;


function setup() {
  createCanvas(800,400);

  car = createSprite(25,50,50,50);
  car.shapeColor = "white";
  car.velocityX = random(55,90);

  wall = createSprite(775,100,40,height/2); 

  weight = random(400,1500);
}
function draw() {
  background("black");

  console.log(car.velocityX);

  if (car.isTouching(wall)){
    car.velocityX = 0;
    var deformation = 0.5*weight*car.velocityX*car.velocityX/22500;
    if (deformation > 180){
      car.shapeColor = "red";
    }
    if (deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }
    if (deformation < 100){
      car.shapeColor = "green";
    }
  }
  drawSprites();
}