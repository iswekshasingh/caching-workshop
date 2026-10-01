const fs = require("fs/promises")

async function readDB() {
    const data = await fs.readFile("./test.json", "utf-8")
    return JSON.parse(data)
}
async function readDBDelay() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const data = await fs.readFile("./test.json", "utf-8")
                    resolve(data)
                } catch (error) {
                    reject(error)
                }
            }, 1500)
        })
        return JSON.parse(data)
    } catch (error) {
        console.log("Error reading database:", error)
        throw error
    }
}
async function writeDB(db) {
    await fs.writeFile(
        "./test.json",
        JSON.stringify(db, null, 2)
    )
}
module.exports = {
    readDB,
    readDBDelay,
    writeDB
}