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
        context.fillStyle = '#0f0'
        context.fillRect(this.x, this.y, this.width, this.height)

        if (this.Game.debug) {
            context.fillStyle = 'black'
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.font = '12px Arial'
            context.fillText(`x: ${this.x.toFixed()}`, this.x + 20, this.y - 5)
            context.fillText(`y: ${this.y.toFixed()}`, this.x + 20, this.y - 20)
        }
    }
}