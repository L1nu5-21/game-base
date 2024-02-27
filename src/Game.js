import Player from "./Player"
import InputHandler from "./InputHandler"
import UserInterface from "./UserInterface"
import Pumpkin from "./Pumpkin"
import Platform from "./Platfrom"
import HealthPot from "./HealthPot"
import Background from "./Background"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.ground = this.height - 50
    this.background = new Background(this)
    


    this.keys = []
    this.platforms = [
      new Platform(this, 0, this.ground, this.width, 100, 1),
      new Platform(this, 0, 280, 200, 10, 2),
      new Platform(this, this.width - 200, 280, 200, 10, 3),
      new Platform(this, this.width/2 - 150, 150, 300, 10, 4)
    ]
    


    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 1000
    this.pog = 0


    this.gameTime = 0
    this.gameOver = false
    this.paused = true
    this.gravity = 3
    this.debug = false
    this.score = 0


    this.Player = new Player(this)
    this.InputHandler = new InputHandler(this)
    this.UserInterface = new UserInterface(this)
  }

  update(deltaTime) {
    if (!this.paused && !this.gameOver) {
      this.gameTime += deltaTime
      this.Player.update(deltaTime)
    }



    if (this.enemyTimer > this.enemyInterval && this.enemies.length < 6 && !this.paused && !this.gameOver) {
      this.pog = Math.floor(Math.random()*4)
      this.addEnemy(this.platforms[this.pog].x + (this.platforms[this.pog].width - this.Player.width)/2, this.platforms[this.pog].y)
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    }

    this.enemies.forEach((Enemy) => {
      if (!this.paused && !this.gameOver) Enemy.update(deltaTime)
      if (this.checkCollision(this.Player, Enemy)) {
        if (Enemy.healthUp && this.Player.hitPoints < 10) this.Player.hitPoints += Enemy.healthUp
        if (this.Player.hitPoints > 10) this.Player.hitPoints = 10
        Enemy.markedForDeath = true
        this.Player.hitPoints -= Enemy.damage
        this.score += 1
      }
      if(this.gameTime >= 60*1000){
        this.gameOver = true
      }
    })

    this.enemies = this.enemies.filter((Enemy) => !Enemy.markedForDeath)

    this.platforms.forEach((Platform) => {
      if (this.checkPlatformCollision(this.Player, Platform)) {
       // console.log(this.Player.speedY)
       // console.log(this.Player.y + this.Player.height/2 > Platform.y)
        if (this.Player.speedY < 0 && this.Player.y + this.Player.height/3 > Platform.y) {
          this.Player.y = Platform.y + Platform.height
          this.Player.grounded = false
        } else {
          this.Player.speedY = 0
          this.Player.y = Platform.y - this.Player.height
        }
      }


      this.enemies.forEach((Enemy) => {
        if (this.checkPlatformCollision(Enemy, Platform)) {
          if (Enemy.speedY < 0 && Enemy.y + Enemy.height > Platform.y) {
            Enemy.y = Platform.y + Platform.height
            Enemy.grounded = false
          } else {
            Enemy.speedY = 0
            Enemy.y = Platform.y - Enemy.height
          }

          if (Enemy.x < Platform.x && Enemy.speedX && Enemy.grounded || Enemy.x + Enemy.width > Platform.x + Platform.width && Enemy.speedX > 0 && Enemy.grounded) Enemy.jump()
          if(Enemy.x < 0 && Enemy.speedX || Enemy.x + Enemy.width > this.width && Enemy.speedX > 0) Enemy.speedX *= -1
        }
      })
    })
    
  }

  draw(context) {
    this.background.draw(context)
    this.enemies.forEach((Enemy) => Enemy.draw(context))
    this.platforms.forEach((Platform) => Platform.draw(context))
    this.Player.draw(context)
    this.UserInterface.draw(context)
  }

  addEnemy(x, y) {
    this.enemies.push(new Pumpkin(this, x, y))
  }

  addHealthPot() {
    this.enemies.push(new HealthPot(this))
  }

  checkCollision(hitbox1, hitbox2) {
    return(
    hitbox1.x < hitbox2.x + hitbox2.width &&
    hitbox1.x + hitbox1.width > hitbox2.x &&
    hitbox1.y < hitbox2.y + hitbox2.height &&
    hitbox1.y + hitbox1.height > hitbox2.y)
  }

  checkPlatformCollision(object, platform) {
    if (
      object.y + object.height >= platform.y &&
      object.y < platform.y + platform.height &&
      object.x + object.width >= platform.x &&
      object.x <= platform.x + platform.width
    ) {
      if (!object.grounded && object.y + object.height > platform.y) {
        object.grounded = true
      }
      return true
    } else {
        if (object.grounded && object.y + object.height < platform.y) {
          object.grounded = false
        }
      return false
    }
  }

  restartGame(){
    this.Player.x = 50
    this.Player.y = 280
    this.Player.speedX = 0
    this.Player.speedY = 0
    this.enemies = []
    this.gameTime = 0
    this.gameOver = false
    this.enemyTimer = 0
    this.score = 0
  }
}