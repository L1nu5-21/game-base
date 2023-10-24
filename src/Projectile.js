export default class Projectile {
    constructor(Game, x, y) {
        this.Game = Game
        this.width = 8
        this.height = 16
        this.x = x
        this.y = y

        this.speed = 5
        this.damage = 1
        this.markedForDeletion = false
    }

    update() {
        this.x += this.speed
        if (this.x > this.Game.width) {
            this.markedForDeletion = true
        }
    }

    draw(context) {
        context.fillStyle = '#ff0'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}