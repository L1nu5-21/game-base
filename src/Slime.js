import Enemy from "./Enemy";
import spriteImage from './assets/css/assets/joshua/template player enemy --Pumpa.png'

export default class Slime extends Enemy {
    constructor (Game) {
        super(Game)
        this.hitPoints = 1
        this.width = 40
        this.height = 40
        this.x = this.Game.width
        this.y = 300
        this.speedX = Math.random() * -1.5 - 0.5
        this.damage = 0

        const image = new Image()
        image.src = spriteImage
        this.image = image

        this.frameY = 1
        this.idleFrames = 1
    }

    update(deltaTime) {

    }
}