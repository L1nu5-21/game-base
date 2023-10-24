import Enemy from "./Enemy";

export default class Slime extends Enemy {
    constructor (Game) {
        super(Game)
        this.hitPoints = Math.ceil(Math.random()*5)
        this.width = 10*this.hitPoints
        this.height = 40
        this.x = this.Game.width
        this.y = this.Game.height - 200
        this.speedX = Math.random() * -1.5 - 0.5
        this.damage = Math.ceil(this.hitPoints / 2)
    }
}