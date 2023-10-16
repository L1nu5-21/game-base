import projectile from "./projectile"

export default class player {
    constructor(game) {
        this.game = game
        this.width = 32
        this.height = 64
        this.x = 50
        this.y = 100
        this.speedX = 1
        this.speedY = 1
        this.maxSpeed = 2
        this.color = '#f36'
        this.projectiles = []
        this.shootTimer = 3
        
    }

    update(deltaTime) {
        if (this.game.keys.includes('w')) {
            this.speedY = -this.maxSpeed
        } else if (this.game.keys.includes('s')) {
            this.speedY = this.maxSpeed
        } else if (this.game.keys.includes('a')) {
            this.speedX = -this.maxSpeed
        } else if (this.game.keys.includes('d')) {
            this.speedX = this.maxSpeed
        } else {
            this.speedY = 0
            this.speedX = 0
        }
        this.x += this.speedX

        this.y += this.speedY

        this.projectiles.forEach((projectile) => {
            projectile.update
        })
        this.projectiles = this.projectiles.filter(
            (projectile) => !projectile.markedForDeletion
        )

    }

    draw(context) {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)

        this.projectiles.forEach((projectile) => {
            projectile.draw(context)
        }) 
    }

    shoot() {
        this.projectiles.push(new projectile( this.game, this.x + this.width, this.y + this.height/2) )
    }
}