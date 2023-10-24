import Enemy from "./Enemy";

export default class HealthPot extends Enemy {
    constructor (Game) {
        super(Game)
        this.hitPoints = 3
        this.width = 40
        this.height = 40
        this.x = 200 + Math.random()*300
        if (this.x + this.width > 500) this.x = 500 - this.width
        this.y = 0
        this.damage = 0
        this.healthUp = 2
    }
}