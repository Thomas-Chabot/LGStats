var PlayerStatsWriter = require("./CsvFormats/PlayerStats.js");

function buildPlayerStatsDataArray(playerName, position, statsData){
    return {
        PlayerName: playerName,
        Position: position,
        StatsType: statsData.StatsType,
        Wins: statsData.Record.Wins,
        Losses: statsData.Record.Losses,
        OvertimeLosses: statsData.Record.OvertimeLosses,
        Points: statsData.Points,
        Goals: statsData.Goals,
        Assists: statsData.Assists,
        PlusMinus: statsData.PlusMinus,
        Shots: statsData.Shots,
        Hits: statsData.Hits,
        PenaltyMinutes: statsData.PenaltyMinutes,
        FaceoffPercentage: statsData.FaceoffPercentage,
        ShotPercentage: statsData.ShotPercentage,
        Takeaways: statsData.Takeaways,
        Giveaways: statsData.Giveaways,
        Blocks: statsData.Blocks,
        ShotsAgainst: statsData.ShotsAgainst,
        SavePercentage: statsData.SavePercentage,
        GoalsAgainst: statsData.GoalsAgainst,
        Saves: statsData.Saves,
        GoalsAgainstAverage: statsData.GoalsAgainstAverage,
        GamesPlayed: statsData.GamesPlayed,
        PointsPerGame: statsData.PointsPerGame,
        WinPercentage: statsData.WinPercentage
    }
}

function savePlayerStats(playerStatsData, outputFolderPath){
    var officialStats = [ ]
    var positionStats = [ ]

    for (var playerStats of playerStatsData){
        officialStats.push(buildPlayerStatsDataArray(playerStats.PlayerName, playerStats.Position, playerStats.OfficialStats))
        positionStats.push(buildPlayerStatsDataArray(playerStats.PlayerName, playerStats.Position, playerStats.PositionStats))
    }

    PlayerStatsWriter.Write(officialStats, `${outputFolderPath}/OfficialStats.csv`)
    PlayerStatsWriter.Write(positionStats, `${outputFolderPath}/PositionStats.csv`)
}

module.exports.WritePlayerStats = savePlayerStats