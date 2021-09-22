const { exec, which } = require("shelljs");

const ldns = {
    keygen: "ldns-keygen",
    sign: "ldns-signzone",
    verify: "ldns-verify-zone",
    key2ds: "ldns-key2ds"
};

const nsd = {
    control: "nsd-control"
};

for ( const cli of [ldns, nsd] ) {
    for ( const tool of Object.entries(cli) ) {
        const name = tool[0];
        const path = which(tool[1])?.stdout;

        if ( path ) {
            cli[name] = (args) => exec(`${path} ${args}`).stdout;
        } else {
            cli[name] = null;
        }
    }
}

module.exports = { ldns, nsd };
