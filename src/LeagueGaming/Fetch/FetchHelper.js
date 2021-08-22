var axios = require("axios")
var cheerio = require("cheerio")

async function buildCheerio(documentUrl){
    var result = await axios.get(documentUrl);
    var documentBody = result.data;
    return cheerio.load(documentBody)
}

module.exports.Cheerio = buildCheerio