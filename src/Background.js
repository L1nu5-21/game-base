import Layer from "./Layer"
import background1 from "./assets/css/assets/joshua/Kopia av bg.png"

export default class Background {
    constructor(Game) {
        this.Game = Game
        
        const background = new Image()
        background.src = background1
        this.background = background
        
        this.width = 1768
        this.height = 514
    }

    draw(context) {
        context.drawImage(this.background, -30, 0,this.width, this.height)
    }
}