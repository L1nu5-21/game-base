import Projectile from "./Projectile"

export default class Player {
    constructor(game) {
        this.game = game
        this.width = 32
        this.height = 64
        this.x = 50
        this.y = 100
        this.speedX = 4
        this.speedY = 4
        this.maxSpeed = 8
        this.hitPoints = 5
        this.color = '#f36'
        this.projectiles = []
        this.shootTimer = 3
        
    }

    update(deltaTime) {
        if (this.game.keys.includes('w') && this.y > 0) {
            this.speedY = -this.maxSpeed
        } else if (this.game.keys.includes('s') && this.y < this.game.height - this.height) {
            this.speedY = this.maxSpeed
        } else if (this.game.keys.includes('a') && this.x > 0) {
            this.speedX = -this.maxSpeed
        } else if (this.game.keys.includes('d') && this.x < this.game.width - this.width) {
            this.speedX = this.maxSpeed
        } else {
            this.speedY = 0
            this.speedX = 0
        }
        this.x += this.speedX

        this.y += this.speedY

        this.projectiles.forEach((Projectile) => {
            Projectile.update
        })
        this.projectiles = this.projectiles.filter(
            (Projectile) => !Projectile.markedForDeletion
        )

    }

    draw(context) {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)

        this.projectiles.forEach((Projectile) => {
            Projectile.draw(context)
        }) 
    }

    shoot() {
        this.projectiles.push(new Projectile( this.game, this.x + this.width, this.y + this.height/2) )
    }
}