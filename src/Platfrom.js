export default class Platform {
    constructor(Game, x, y, width, height, idNum) {
        this.Game = Game
        this.width = width
        this.height = height
        this.colour = 'white'
        this.x = x
        this.y = y
        this.idNum = idNum
        this.isTangible = true
    }

    update() {

    }

    draw(context) {
        context.fillStyle = this.colour
        context.fillRect(this.x, this.y, this.width, this.height)

        if (this.Game.debug) {
            context.fillStyle = 'white'
            context.strokeStyle = 'white'
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.font = '12px Arial'
            context.fillText(`x: ${this.x.toFixed()}`, this.x + 20, this.y - 5)
            context.fillText(`y: ${this.y.toFixed()}`, this.x + 20, this.y - 20)
            context.fillText(`platform # ${this.idNum}`, this.x + 20, this.y - 35)
          }
    }
}