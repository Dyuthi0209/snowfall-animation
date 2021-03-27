const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var snow=[];
var maxSnow=30;
var snowfall;
var bg;
var snowm;
var boy;
var snowF1,snowF2,snowflake;
var snowFCreatedFrame = 0;


function preload(){
    
  bg = loadImage("winterbg.png");
  snowF1 = loadImage("snow4.webp");
  snowF2 = loadImage("snow5.webp");

}


function setup() {
  createCanvas(600, 450);

  engine = Engine.create();

	world = engine.world;
 
  if(frameCount%150 === 0){
    for(var i=0; i<maxSnow; i++){
        snow.push( new Snow(random(0,600), random(0,450) ,7));
      }
    }

  

    snowm= new Snowman(150,300,100)
    
    boy= new Boy(400,330,100)

Engine.run(engine);


}

function draw() {
  background(bg);  

  for(var i =0;i<maxSnow;i++){
   snow[i].display();
   snow[i].update();
    }

    rand = Math.round(random(1,2));
        if(frameCount%50 === 0){
            snowFCreatedFrame = frameCount;
           snowflake = createSprite(random(0,600), random(0,450), 10, 10);
            switch(rand){
                case 1: snowflake.addImage(snowF1);
                break;
                case 2: snowflake.addImage(snowF2);
                break; 
                default: break;
            }
            snowflake.scale = 0.1;
        }
    
        if(snowFCreatedFrame + 30 === frameCount && snowflake){
          snowflake.destroy();
        }

snowm.display();

boy.display();

  drawSprites();
}