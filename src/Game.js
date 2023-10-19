import Player from "./Player"
import InputHandler from "./InputHandler"
import UserInterface from "./UserInterface"
import Slime from "./Slime"
import Platform from "./Platfrom"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.ground = this.height - 30
    
    
    
    this.keys = []
    this.platforms = [
      new Platform(this, 0, this.ground, this.width, 100),
      new Platform(this, this.width - 200, 280, 200, 20),
      new Platform(this, 200, 200, 300, 20)
    ]
    


    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 1000


    this.gameTime = 0
    this.gameOver = false
    this.gravity = 5
    this.debug = false
    this.score = 0


    this.Player = new Player(this)
    this.InputHandler = new InputHandler(this)
    this.UserInterface = new UserInterface(this)
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.Player.update(deltaTime)
    this.Player.projectiles.forEach((Projectile) => {
      Projectile.update()
    })

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    }

    this.enemies.forEach((Enemy) => {
      Enemy.update(deltaTime)
      if (this.checkCollision(this.Player, Enemy)) {
        Enemy.markedForDeath = true
        this.Player.hitPoints--
      }
      this.Player.projectiles.forEach((Projectile) => {
        if (this.checkCollision(Projectile, Enemy)) {
          Enemy.hitPoints -= Projectile.damage
          if (Enemy.hitPoints <= 0) {
            Enemy.markedForDeath = true
            this.score++
          }
          Projectile.markedForDeletion = true
        }
      })
      if(this.Player.hitPoints <= 0) {
        this.gameOver = true
      }
    })

    

    this.enemies = this.enemies.filter((Enemy) => !Enemy.markedForDeath)

    this.platforms.forEach((Platform) => {
      if (this.checkPlatformCollision(this.Player, Platform)) {
        this.Player.speedY = 0
        this.Player.y = Platform.y - this.Player.height
        this.Player.grounded = true
      }
      this.enemies.forEach((Enemy) => {
        if (this.checkPlatformCollision(Enemy, Platform)) {
          Enemy.speedY = 0
          Enemy.y = Platform.y - Enemy.height
        }
      })
    })
  }

  draw(context) {
    this.Player.draw(context)
    this.UserInterface.draw(context)
    this.enemies.forEach((Enemy) => Enemy.draw(context))
    this.platforms.forEach((Platform) => Platform.draw(context))
  }

  addEnemy() {
    this.enemies.push(new Slime(this))
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
      object.y < platform.y &&
      object.x + object.width >= platform.x &&
      object.x <= platform.x + platform.width
    ) {
      if (object.grounded && object.y + object.height > platform.y) {
        object.speedY = 0
        object.y = platform.y - object.height
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
}