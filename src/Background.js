import Layer from "./Layer"

export default class Background {
    constructor(Game) {
        this.Game = Game
        const sky = new Image()
        sky.src = skyImage
        this.skyLayer = new Layer(Game, sky, 1708, 500, 0.2)
        this.layers = [
            this.skyLayer
        ]
    }

    update() {

    }

    draw() {
        
    }
}