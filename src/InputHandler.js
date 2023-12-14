export default class InputHandler {
    constructor (Game) {
        this.Game = Game
        window.addEventListener('keydown', (event) => {
            if ((event.key === 'w' 
            ||event.key === 'a' 
            || event.key === 's' 
            || event.key === 'd') && 
            this.Game.keys.indexOf(event.key) === -1) {
                this.Game.keys.push(event.key)
            }
            if (event.key === 'p') {
                this.Game.debug = !this.Game.debug
            }
            if (event.key === 'h') {
                if(this.Game.debug) {
                    this.Game.addHealthPot()
                }
            }
            if (event.key === ' ') {
                this.Game.Player.shoot()
            }
        })

        window.addEventListener('keyup', (event) => {
            if (this.Game.keys.indexOf(event.key) > -1) {
                this.Game.keys.splice(this.Game.keys.indexOf(event.key), 1)
              }
        })
    }
}