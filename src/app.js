var Player = require("./Data/Player.js").Player
var Fetch = require("./LeagueGaming/Fetch/Fetch.js")
var CsvWriter = require("./Logging/Csv/SaveToCsv.js")
var Constants = require("./Constants.js")

async function main(){
    var playerStats = await Fetch.worldJuniors();
    await CsvWriter.WritePlayerStats(playerStats, Constants.OutputFolder)
}

main()