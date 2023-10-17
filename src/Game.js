import Player from "./Player"
import InputHandler from "./InputHandler"
import UserInterface from "./UserInterface"
import Slime from "./Slime"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.keys = []


    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 1000


    this.gameTime = 0
    this.gameOver = false
    this.gravity = 1
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
    })

    this.enemies = this.enemies.filter((Enemy) => !Enemy.markedForDeath)
  }

  draw(context) {
    this.Player.draw(context)
    this.UserInterface.draw(context)
    this.enemies.forEach((Enemy) => Enemy.draw(context))
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
}