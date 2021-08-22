class Player {
    constructor(playerId, playerName, position){
        this.playerName = playerName
        this.playerId = playerId
        this.position = position
    }

    get Name(){ return this.playerName; }
    get Id(){ return this.playerId; }
    get Position(){ return this.position; }
}

module.exports.Player = Player