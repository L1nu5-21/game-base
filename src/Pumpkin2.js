import Enemy from "./Enemy";
import spriteImage from './assets/css/assets/joshua/Kopia av pumkin sprites.png'

export default class Pumpkin2 extends Enemy {
    constructor(Game, x, y) {
        super(Game)
        this.hitPoints = 1
        this.width = 30
        this.height = 30
        this.x = x
        this.y = y
        this.speedX = 4
        this.speedy = 0
        this.damage = 0

        const image = new Image()
        image.src = spriteImage
        this.image = image
    }

    draw() {
        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.flip ? this.x * -1 - this.width : this.x,
            this.y,
            this.width,
            this.height
        )
      
        context.restore()
    }
}