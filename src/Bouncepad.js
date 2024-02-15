import Platform from "./Platfrom";

export default class Bouncepad extends Platform{
    constructor(Game, x, y, width, height, idNum) {
        super(Game)
        this.width = width
        this.height = height
        this.colour = 'green'
        this.x = x
        this.y = y
        this.idNum = idNum
        this.isTangible = true

        this.bouncyness = -20
    }
}