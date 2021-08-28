var fs = require("fs").promises;
var csv = require("./Csv/SaveToCsv.js")

async function createOutputFolder(folderPath){
    try {
        await fs.mkdir(folderPath);
    } catch (err) {
        // If the error is that the folder already exists, we can ignore it;
        // Otherwise, we want to throw the same error
        if (err.code != "EEXIST") {
            throw err;
        }
    }
}

async function savePlayerStats(data, path){
    await createOutputFolder(path);
    csv.WritePlayerStats(data, path)
}

module.exports.WriteToCsv = savePlayerStats