import Projectile from "./Projectile"
import spriteImage from './assets/css/assets/joshua/Kopia av player sprites.png'

export default class Player {
    constructor(Game) {
        this.Game = Game
        this.width = 32
        this.height = 64
        this.x = 50
        this.y = 280
        this.color = '#f36'

        this.speedX = 1
        this.speedY = 0
        this.maxSpeed = 8
        this.grounded = false
        this.jumpSpeed = 30
        
        const image = new Image()
        image.src = spriteImage
        this.image = image
        
        this.frameX = 0
        this.frameY = 1
        this.maxFrame = 6
        this.fps = 40
        this.timer = 0
        this.interval = 1000 / this.fps
        this.runFrames = 3
        this.idleFrames = 1

        this.flip = false
    }

    update(deltaTime) {
        if (this.grounded) {
            this.speedY = 0
        } else {
            this.speedY += this.Game.gravity
        }
        if (this.Game.keys.includes(' ')) {
            this.jump()
        }
        
        if (this.Game.keys.includes('a') && this.x > 0) {
            this.speedX = -this.maxSpeed
        } else 
            if (this.Game.keys.includes('d') && this.x < this.Game.width - this.width) {
                this.speedX = this.maxSpeed
        } else {
            this.speedX = 0
        }
        

        this.x += this.speedX
        this.y += this.speedY

        this.timer++

        if (this.speedX !== 0) {
            if (this.speedX < 0) this.flip = true
            else if (this.speedX > 0) this.flip = false
            this.frameY = 0
            this.maxFrame = this.runFrames
            } else {
            this.maxFrame = this.idleFrames
            this.frameY = 1
            }
            if (this.timer > this.interval) {
                this.frameX++
                this.timer = 0
            }
            if (this.frameX > this.maxFrame) {
                this.frameX = 0
          }
    }

    draw(context) {
        if (this.flip) {
            context.save()
            context.scale(-1, 1)
        }
      
        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.flip ? this.x * -1 - this.width : this.x,
            this.y,
            this.width,
            this.height
        )
      
        context.restore()
    }

    jump() {
        if (this.grounded) {
            this.speedY = -this.jumpSpeed
        }
    }
}