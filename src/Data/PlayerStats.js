// Parses a record (format W-L-OTL) into Wins/Losses/OvertimeLosses.
function parseRecord(record){
    if (record == null || record == undefined) record = "";

    var numbers = record.match(/([0-9]+)/g)
    if (numbers == null) {
        numbers = [0, 0, 0]
    }

    return {
        Wins: parseInt(numbers[0]),
        Losses: parseInt(numbers[1]),
        OvertimeLosses: parseInt(numbers[2])
    }
}

// Safely divide a by b, returning ifZero if the division is undefined.
function safeDivision(a, b, ifZero){
    if (b == 0) return ifZero;
    return a/b;
}

class PlayerStats {
    constructor(player, type, record, points, goals, assists, plusMinus, shots, hits, penaltyMinutes,
        faceoffPercentage, shotPercentage, takeaways, takeawaysMinusGiveaways, blocks,
        shotsAgainst, savePercentage, goalsAgainst, saves, goalsAgainstAverage)
    {
        this.Player = player

        // Taken from stat rows
        this.StatsData = {
            StatsType: type,
            Record: parseRecord(record),
            Points: parseInt(points) || 0,
            Goals: parseInt(goals) || 0,
            Assists: parseInt(assists) || 0,
            PlusMinus: parseInt(plusMinus) || 0,
            Shots: parseInt(shots) || 0,
            Hits: parseInt(hits) || 0,
            PenaltyMinutes: penaltyMinutes,
            FaceoffPercentage: parseFloat(faceoffPercentage) || 0,
            ShotPercentage: parseFloat(shotPercentage) || 0,
            Takeaways: parseInt(takeaways) || 0,
            Giveaways: ((takeawaysMinusGiveaways - takeaways) * -1) || 0,
            Blocks: parseInt(blocks) || 0,
            ShotsAgainst: parseInt(shotsAgainst) || 0,
            SavePercentage: parseFloat(savePercentage) || 0,
            GoalsAgainst: parseInt(goalsAgainst) || 0,
            Saves: parseInt(saves) || 0,
            GoalsAgainstAverage: parseFloat(goalsAgainstAverage) || 0
        }
    }

    get GamesPlayed(){
        return this.StatsData.Record.Wins + this.StatsData.Record.Losses + this.StatsData.Record.OvertimeLosses
    }
    get PointsPerGame(){
        return safeDivision(this.StatsData.Points, this.GamesPlayed, 0)
    }
    get WinPercentage(){
        return safeDivision(this.StatsData.Record.Wins, this.GamesPlayed, 0)
    }

    // Note: Returning StatsData here means that the values can be changed externally.
    get Data(){
        // Add in the calculated values
        this.StatsData.GamesPlayed = this.GamesPlayed
        this.StatsData.PointsPerGame = this.PointsPerGame
        this.StatsData.WinPercentage = this.WinPercentage

        return this.StatsData
    }
}

module.exports.PlayerStats = PlayerStats