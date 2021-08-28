module.exports.Leagues = {
    PsnChl: {
        LeagueNumber: 69,
        CurrentSeason: 17
    }
}

module.exports.LeagueId = module.exports.Leagues.PsnChl.LeagueNumber;
module.exports.SeasonId = module.exports.Leagues.PsnChl.CurrentSeason;

module.exports.ShorthandPositionMap = {
    "Right Wing": "RW",
    "Left Wing": "LW",
    "Center": "C",
    "Left Defense": "LD",
    "Right Defense": "RD",
    "Goalie": "G"
}

module.exports.OutputFolder = "./Out"