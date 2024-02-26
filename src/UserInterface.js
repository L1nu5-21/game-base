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
        context.fillText(`Time: ${(60 - this.Game.gameTime * 0.001).toFixed(1)}`, 20, 40)
        context.fillText(`Score: ${this.Game.score}`, 20, 70)

        if (this.Game.gameOver) {
            context.font = `50px ${this.fontFamily}`
            context.fillText('Game Over', this.Game.width / 2 - 130, this.Game.height / 2 )
            context.font = `20px ${this.fontFamily}`
            context.fillText(`Your score was ${this.Game.score} points!`, this.Game.width / 2 - 110, this.Game.height / 2 + 50)
            context.fillText(`Press R to restart.`, this.Game.width / 2 - 80, this.Game.height / 2 + 80)
        }

        if (this.Game.paused && !this.Game.gameOver) {
            context.font = `20px ${this.fontFamily}`
            context.fillText(`Move with A & D and jump with Space.`, this.Game.width / 2 - 170, this.Game.height / 2)
            context.fillText(`Gather as many pumpkins as you can!`, this.Game.width / 2 - 170, this.Game.height / 2 + 30)
            context.fillText(`Press Y to start!`, this.Game.width / 2 - 70, this.Game.height / 2 + 60)
        }

        if (this.Game.debug) {
            context.textAllign = 'left'
            context.font = `${this.fontSize}px ${this.fontFamily}`
            context.fillText(`X: ${(this.Game.Player.x)}`, this.Game.width - 80, 40)
            context.fillText(`Y: ${(this.Game.Player.y)}`, this.Game.width - 80, 70)
            context.fillText(`Grounded: ${(this.Game.Player.grounded)}`, this.Game.width - 175, 100)
        }

        context.restore()
    }
}