import player from "./player"
import inputHandler from "./inputHandler"
import projectile from "./projectile"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.keys = []
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
    this.player = new player(this)
    this.inputHandler = new inputHandler(this)
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.player.update(deltaTime)
    this.player.projectiles.forEach((projectile) => {
      projectile.update()
    });
  }

  draw(context) {
    this.player.draw(context)
  }
}