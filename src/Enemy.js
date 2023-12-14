export default class Enemy {
    constructor(Game) {
        this.Game = Game
        this.x = 0
        this.y = 0
        this.speedX = 0
        this.speedY = 0
        this.markedForDeletion = false
        this.width = 20
        this.height = 20
        this.grounded = false
        this.damage = 0
        this.hitPoints = 1

        this.frameX = 0
        this.frameY = 1
        this.maxFrame = 6
        this.fps = 30
        this.timer = 0
        this.interval = 1000 / this.fps
        this.runFrames = 3
        this.idleFrames = 1
    }

    update() {
        this.x += this.speedX
        if (this.x < 0) this.markedForDeletion = true
        if (!this.grounded) {
            this.speedY += this.Game.gravity
        }
        this.y = this.speedY
    }

    draw(context) {
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

        if (this.Game.debug) {
            context.fillStyle = 'white'
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.font = '12px Arial'
            context.fillText(`x: ${this.x.toFixed()}`, this.x + 20, this.y - 5)
            context.fillText(`y: ${this.y.toFixed()}`, this.x + 20, this.y - 20)
        }
    }
}