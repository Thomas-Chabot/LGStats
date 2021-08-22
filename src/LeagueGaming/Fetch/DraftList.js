const { Player } = require("../Player.js");
var fetch = require("./FetchHelper.js")

var draftListUrl = "https://www.leaguegaming.com/forums/index.php?leaguegaming/league&action=league&page=draftlist&leagueid=94&seasonid=13"
async function fetchDraftList(){
    var $ = await fetch.Cheerio(draftListUrl);
    var rows = $("#lgtable tbody tr");
    var results = [ ]
    
    rows.each(function(){
        var personName = $("td", this).eq(2).text().trim()
        var position = $("td", this).eq(3).text().trim()
        var userUrl = $("a", this).attr("href")
        var userId = userUrl.match(/userid=([0-9]+)&/)[1]

        results.push(new Player(userId, personName, position))
    })

    return results
}

module.exports.fetch = fetchDraftList