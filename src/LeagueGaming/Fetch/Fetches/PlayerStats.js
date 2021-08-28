var Constants = require("../../../Constants.js")
var PlayerStats = require("../../../Data/PlayerStats.js").PlayerStats
var fetch = require("./FetchHelper.js")

function buildUrl(player, leagueId, seasonId){
    return `https://www.leaguegaming.com/forums/index.php?leaguegaming/league&action=league&page=team_user&userid=${player.Id}&leagueid=${leagueId}&seasonid=${seasonId}`;
}

function getStatsRow($, parentElement, headerText, rowText){
    var headerElement = $("h3.textHeading", parentElement).filter(function(){
        return $(this).text().trim() == headerText
    }).first()
    var tableElement = headerElement.next()
    var rows = $("tr", tableElement)

    return rows.filter(function(){
        return $("td", this).first().text().trim() == rowText
    }).first()
}
function getOfficialStatsRow($, parentElement) {
    return getStatsRow($, parentElement, "Career Stats", "Official")
}

function getPositionStatsRow($, parentElement, positionType){
    return getStatsRow($, parentElement, "Career Stats By Position", positionType)
}

function buildPlayerStats($, player, statsRow){
    var td = $("td", statsRow)
    var values = [ ]
    td.each(function(){
        values.push($(this).text())
    })

    return new PlayerStats(player, ...values)
}

async function fetchPlayerStats(player, league, season){
    if (!league) league = Constants.LeagueId;
    if (!season) season = Constants.SeasonId;

    var $ = await fetch.Cheerio(buildUrl(player, league, season))
    var leagueStats = $(`#lg_team_user_leagues-${league}`)

    var officialStatsRow = getOfficialStatsRow($, leagueStats)
    var positionStatsRow = getPositionStatsRow($, leagueStats, player.ShorthandPosition)
    
    return {
        Player: player,
        OfficialStats: buildPlayerStats($, player, officialStatsRow),
        PositionalStats: buildPlayerStats($, player, positionStatsRow)
    }
}

module.exports.fetch = fetchPlayerStats;