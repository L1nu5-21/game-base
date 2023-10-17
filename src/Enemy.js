export default class Enemy {
    constructor(Game) {
        this.Game = Game
        this.x = 0
        this.y = 0
        this.speedX = 0
        this.markedForDeletion = false
        this.width = 20
        this.height = 20
    }

    update() {
        this.x += this.speedX
        if (this.x < 0) this.markedForDeletion = true
    }

    draw(context) {
        context.fillStyle = '#0f0'
        context.fillRect(this.x, this.y, this.width, this.height)

        if (this.Game.debug) {

        }
    }
}