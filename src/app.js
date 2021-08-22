var Player = require("./LeagueGaming/Player.js").Player
var fetchDraftList = require("./LeagueGaming/Fetch/DraftList.js").fetch

async function getDraftList(){
    var results = await fetchDraftList();
    console.log(results)
}

getDraftList()