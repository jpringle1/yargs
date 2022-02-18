const fs = require("fs"); //TODO find out what this does
const { json } = require("stream/consumers");
const { addMovie } = require("./utils/index") //?

const app = () => {
    if (process.argv[2] === 'title' && process.argv[4] ==='actor') {
        const stringyObj = JSON.stringify({title: process.argv[3], actor: process.argv[5]});
        fs.writeFileSync(`./storage.json`, stringyObj)//create new file with content "title: (title), actor: (actor)"
    } else {
        console.log("i don't understand")
    }
};

app();

//process.argv = argument vector.
//process.argv[1] = get second argument passed in from command line. for example, hnode app.js arg1 arg2 arg3 arg4 

JSON.parse(filePath)
JSON.stringify(filePath)
fs.writeFileSync
fs.readFileSync
