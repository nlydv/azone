const fs = require("fs");

const cmdFiles = fs.readdirSync("./lib/commands").filter(file => file.endsWith(".js"));

for ( const file of cmdFiles ) {
    const cmd = require(`./lib/commands/${file}`);
    if ( cmd.name !== "help" || cmd.name !== "version" ) {
        exports[cmd.name] = cmd.exec;
    }
}
