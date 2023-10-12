export default class player {
    constructor(game) {
        this.game = game
        this.width = 32
        this.height = 64
        this.x = 50
        this.y = 100
        this.speedX = 1
        this.speedY = 1
        this.maxSpeed = 2
    }

    update(deltaTime) {
        if (this.game.keys.includes('w')) {
            this.speedY = -this.maxSpeed
        } else if (this.game.keys.includes('s')) {
            this.speedY = this.maxSpeed
        } else {
            this.speedY = 0
        }

        this.x += this.speedX

        this.y += this.speedY
    }

    draw(context) {
        context.fillStyle = '#f00'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}