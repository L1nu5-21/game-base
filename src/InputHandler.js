export default class InputHandler {
    constructor (Game) {
        this.Game = Game
        window.addEventListener('keydown', (event) => {
            if ((event.key === 'w' 
            ||event.key === 'a' 
            || event.key === 's' 
            || event.key === 'd'
            || event.key === ' ') && 
            this.Game.keys.indexOf(event.key) === -1) {
                this.Game.keys.push(event.key)
            }
            
            if (event.key === 'p') this.Game.debug = !this.Game.debug
            
            if (event.key === 'h') {
                if(this.Game.debug) {
                    this.Game.addHealthPot()
                }
            }
            
            if (event.key === 'y') {
                if (this.Game.paused) this.Game.paused = false
                else this.Game.paused = true
            }

            if (event.key === 'r') {
                if (this.Game.gameOver || this.Game.debug || this.Game.paused) this.Game.restartGame()
            }
            
        })

        window.addEventListener('keyup', (event) => {
            if (this.Game.keys.indexOf(event.key) > -1) {
                this.Game.keys.splice(this.Game.keys.indexOf(event.key), 1)
              }
        })
    }
}