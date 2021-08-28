// Saves stats for every player into a CSV file.
var createCsvWriter = require("csv-writer").createObjectCsvWriter;

async function writeData(playerStats, outputFile){
    var csvWriter = createCsvWriter({
        path: outputFile,
        header: [
            {id: "PlayerName", title: "Player Name"},
            {id: "Position", title: "Position"},
            {id: "StatsType", title: "Type"},
            {id: "Wins", title: "Wins"},
            {id: "Losses", title: "Losses"},
            {id: "OvertimeLosses", title: "Overtime Losses"},
            {id: "Points", title: "Points"},
            {id: "Goals", title: "Goals"},
            {id: "Assists", title: "Assists"},
            {id: "PlusMinus", title: "+/-"},
            {id: "Shots", title: "Shots"},
            {id: "Hits", title: "Hits"},
            {id: "PenaltyMinutes", title: "Penalty Minutes"},
            {id: "FaceoffPercentage", title: "Faceoff %"},
            {id: "ShotPercentage", title: "Shot %"},
            {id: "Takeaways", title: "Takeaways"},
            {id: "Giveaways", title: "Giveaways"},
            {id: "Blocks", title: "Blocks"},
            {id: "ShotsAgainst", title: "Shots Against"},
            {id: "SavePercentage", title: "Save %"},
            {id: "GoalsAgainst", title: "Goals Against"},
            {id: "Saves", title: "Saves"},
            {id: "GoalsAgainstAverage", title: "GAA"},
            {id: "GamesPlayed", title: "Games Played"},
            {id: "PointsPerGame", title: "Points Per Game"},
            {id: "WinPercentage", title: "Win %"}	
        ]
    })

    return await csvWriter.writeRecords(playerStats)
}

module.exports.Write = writeData;