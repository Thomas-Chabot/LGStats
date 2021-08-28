var Player = require("./Data/Player.js").Player
var Fetch = require("./LeagueGaming/Fetch/Fetch.js")
var Logger = require("./Logging/Logging.js")
var Constants = require("./Constants.js")

async function main(){
    var playerStats = await Fetch.worldJuniors();
    await Logger.WriteToCsv(playerStats, Constants.OutputFolder)
}

main()