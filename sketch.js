var starImg,bgImg;
var star, starBody;
var fairy,fairyImage;
var music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyImage = loadImage("images/fairyImage1.png");
	music = loadSound("twinkle.mp3");
}

function setup() {
	createCanvas(800, 750);
	music.play();
    fairy = createSprite(200,500,40,40);
	fairy.addImage("fairyImage1.png",fairyImage);
	fairy.scale = 0.2;
	fairy.velocityX = 1;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.3;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

 if(star.y > 470 && starBody.position.y > 470 ) {
	 Matter.Body.setStatic(starBody,true);
	 fairy.velocityX = 0;
	 fairy.velocityY = 0;
 }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

    
	
}
