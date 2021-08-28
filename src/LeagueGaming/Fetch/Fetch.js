var fetchDraftList = require("./Fetches/DraftList.js").fetch
var fetchPlayerStats = require("./Fetches/PlayerStats.js").fetch
var Constants = require("../../Constants.js")

async function fetchWorldJuniorsStats(){
    // 1) Fetch every player from the World Juniors Draft List.
    var draftList = await fetchDraftList();
    console.log("Fetched draft list")

    // 2) Go through every player and grab their player stats
    var allPlayersData = [ ]
    var league = Constants.Leagues.PsnChl.LeagueNumber
    var season = Constants.Leagues.PsnChl.CurrentSeason
    for (var index in draftList){
        var player = draftList[index];
        console.log(`Fetching player stats for ${player.Name} | Progress: ${index}/${draftList.length} (${(index / draftList.length) * 100}%)`)

        var playerStats = await fetchPlayerStats(player, league, season)
        allPlayersData[index] = {
            PlayerName: player.Name,
            PlayerId: player.Id,
            Position: player.Position,
            OfficialStats: playerStats.OfficialStats.Data,
            PositionStats: playerStats.PositionalStats.Data
        }
    }

    return allPlayersData
}

module.exports.worldJuniors = fetchWorldJuniorsStats;
