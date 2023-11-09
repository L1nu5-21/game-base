export default class Layer {
    constructor(Game, image, width, height, speedModifier) {
        this.Game = Game
        this.x = 0
        this.y = 0
        this.width = width
        this.height = height
        this.image = image 

        this.speed = 0
        this.speedModifier = speedModifier
    }

    update() {
        if(this.x <= -this.width) {
            this.x = 0
        }
        this.x -= this.game.speed * this.speedModifier
    }
}