export default class UserInterface {
    constructor(Game) {
        this.Game = Game
        this.fontSize = 25
        this.fontFamily = 'Arial'
        this.color = 'white'
    }

    draw(context) {
        context.save()
        context.fillStyle = this.color
        context.shadowOffsetX = 2
        context.shadowOffsetY = 2
        context.shadowColor = 'black'
        context.textAllign = 'left'
        context.font = `${this.fontSize}px ${this.fontFamily}`
        context.fillText(`HP: ${(this.Game.Player.hitPoints)}`, 20, 40)
        context.fillText(`Time: ${(this.Game.gameTime * 0.001).toFixed(1)}`, 20, 70)
        context.fillText(`Score: ${this.Game.score}`, 20, 100)

        if (this.Game.gameOver) {
            context.textAllign = 'center'
            context.font = `50px ${this.fontFamily}`
            context.fillText('Game Over', this.Game.width / 2, this.Game.height / 2)
        }

        if (this.Game.debug) {
            context.textAllign = 'left'
            context.font = `${this.fontSize}px ${this.fontFamily}`
            context.fillText(`X: ${(this.Game.Player.x)}`, this.Game.width - 80, 100)
            context.fillText(`Y: ${(this.Game.Player.y)}`, this.Game.width - 80, 130)
        }

        context.restore()
    }
}