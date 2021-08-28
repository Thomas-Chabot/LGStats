var Constants = require("../Constants.js")

class Player {
    constructor(playerId, playerName, position){
        this.playerName = playerName
        this.playerId = playerId
        this.position = position
    }

    get Name(){ return this.playerName; }
    get Id(){ return this.playerId; }
    get Position(){ return this.position; }
    get ShorthandPosition(){ return Constants.ShorthandPositionMap[this.Position] }
}

module.exports.Player = Player