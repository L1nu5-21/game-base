export default class inputHandler {
    constructor (game) {
        this.game = game
        window.addEventListener('keydown', (event) => {
            if ((event.key === 'w' ||
            event.key === 'a' ||
            event.key === 's' ||
            event.key === 'd') && this.game.keys.indexOf(event.key) === -1) {
                this.game.keys.push(event.key)
                console.log('buhh, it not work.')
            }
            if (event.key === 'p') {
                this.game.debug = !this.game.debug
            }
        })

        window.addEventListener('keyup', (event) => {
            if (this.game.keys.indexOf(this.key) > -1) {
                this.game.keys.splice(this.game.keys.indexOf(event.key), 1)
            }
        })
    }
}