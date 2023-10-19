import Enemy from "./Enemy";

export default class Slime extends Enemy {
    constructor (Game) {
        super(Game)
        this.hitPoints = Math.ceil(Math.random()*5)
        this.width = 10*this.hitPoints
        this.height = 10*this.hitPoints
        this.x = this.Game.width
        this.y = Math.random() * (this.Game.height * 0.9 - this.height)
        this.speedX = Math.random() * -1.5 - 0.5       
    }
}