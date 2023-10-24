import Projectile from "./Projectile"

export default class Player {
    constructor(Game) {
        this.Game = Game
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
        this.ammo = 10
        this.shootTimer = 3
        this.grounded = false
        this.jumpSpeed = 25
        
    }

    update(deltaTime) {
        if (this.Game.keys.includes('w')) {
            this.jump()
        } else if (this.Game.keys.includes('a') && this.x > 0) {
            this.speedX = -this.maxSpeed
        } else if (this.Game.keys.includes('d') && this.x < this.Game.width - this.width) {
            this.speedX = this.maxSpeed
        } else {
            this.speedY = 0
            this.speedX = 0
        }
        if (this.grounded) {
            this.speedY = 0
        } else {
            this.speedY += this.Game.gravity
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
        this.projectiles.push(new Projectile( this.Game, this.x + this.width, this.y + this.height/2) )
    }

    jump() {
        if (this.grounded) {
            this.speedY = -this.jumpSpeed
            this.grounded = false
        }
    }
}