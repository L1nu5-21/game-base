import Enemy from "./Enemy";
import spriteImage from './assets/css/assets/joshua/Kopia av pumkin sprites.png'


export default class HealthPot extends Enemy {
    constructor (Game) {
        super(Game)
        this.hitPoints = 3
        this.width = 32
        this.height = 32
        this.x = 200 + Math.random()*300
        if (this.x + this.width > 500) this.x = 500 - this.width
        this.y = 0
        this.damage = 0
        this.healthUp = 0

        const image = new Image()
        image.src = spriteImage
        this.image = image

        this.frameX = 0
        this.frameY = 2
        this.maxFrame = 6
        this.fps = 30
        this.timer = 0
        this.interval = 1000 / this.fps
        this.runFrames = 3
        this.idleFrames = 1
    }

    
}