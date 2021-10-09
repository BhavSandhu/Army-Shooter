var backgroundIMG
var shooterIMG, shooter
var enemyIMG, enemy1, enemy, enemy3, enemy4
var bulletIMG, bullet
var explosion
var score=0

function preload() {
  backgroundIMG = loadImage('farm.jpg')
  shooterIMG = loadImage('plane.png')
  enemyIMG = loadImage('nemisis.png')
  enemy1 = loadImage('enemyPlane.png')
  enemy2 = loadImage('enemyPlane.png')
  enemy3 = loadImage('enemyPlane.png')
  enemy4 = loadImage('enemyPlane.png')
  bulletIMG = loadImage('bullet.png')
  kaboom=loadImage('kaboom.png')

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  shooter = createSprite(width / 2, height / 2 + 200)
  shooter.addImage(shooterIMG)
  shooter.scale = 0.35
  bulletGroup=new Group()
  enemyGroup=new Group()
  enemy = createSprite(400, 200)
  enemy.addImage(enemyIMG)
  enemy1 = createSprite(600, 300)
  enemy1.addImage(enemyIMG)
  enemy2 = createSprite(800, 200)
  enemy2.addImage(enemyIMG)
  enemy3 = createSprite(1000, 300)
  enemy3.addImage(enemyIMG)
  enemy4 = createSprite(1200, 200)
  enemy4.addImage(enemyIMG)
  enemy.scale = 0.15
  enemy1.scale = 0.15
  enemy2.scale = 0.15
  enemy3.scale = 0.15
  enemy4.scale = 0.15


}

function draw() {
  background(backgroundIMG);

  shooter.x = World.mouseX

  
  bulletGroup.collide(enemy1, explosion);
  bulletGroup.collide(enemy2, explosion);
  bulletGroup.collide(enemy3, explosion);
  bulletGroup.collide(enemy4, explosion);
  bulletGroup.collide(enemy, explosion);
function explosion(spriteA, spriteB) {
  spriteA.remove();
  spriteB.addImage(kaboom)
  setTimeout(()=>spriteB.remove(),550
  )
  score=score+5
  
}


  drawSprites();
  textSize(40)
  fill("red")
  text("Score : "+score,90,100)
  
}


function mouseClicked() {
  bullet = createSprite(0, height / 2 + 200)
  bullet.addImage(bulletIMG)
  bullet.scale = 0.08
  bullet.x = shooter.x
  
  

  bullet.velocityY = -30
  bulletGroup.add(bullet)
 
}
function enemyFire(){
bullet = createSprite(0,height /2 +200)
bullet.addImage(bulletIMG)
bullet.scale = 0.08


 
}