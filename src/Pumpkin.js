import Enemy from "./Enemy";
import spriteImage from './assets/css/assets/joshua/Kopia av pumkin sprites.png'

export default class Pumpkin extends Enemy {
    constructor (Game, x, y) {
        super(Game)
        this.hitPoints = 1
        this.width = 30
        this.height = 30
        this.x = x
        this.y = y
        this.speedX = 4
        this.speedY = 0
        this.damage = 0

        const image = new Image()
        image.src = spriteImage
        this.image = image
    }

    draw(context) {
        context.drawImage(
            this.image,
            this.frameX * this.width +2,
            this.frameY * this.height +2,
            this.width,
            this.height,
            this.flip ? this.x * -1 - this.width : this.x,
            this.y,
            this.width,
            this.height
        )

        if (this.Game.debug) {
            context.fillStyle = 'white'
            context.strokeStyle = 'white'
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.font = '12px Arial'
            context.fillText(`x: ${this.x.toFixed()}`, this.x + 20, this.y - 5)
            context.fillText(`y: ${this.y.toFixed()}`, this.x + 20, this.y - 20)
          }
      
        context.restore()
    }
}