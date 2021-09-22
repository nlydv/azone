const { cd } = require("shelljs");
const { init, loc } = require("../init.js");

const { ZONEDIR } = loc;
const i = init();

function sign(zone) {
    if ( ! i.success ) return i;
    cd(ZONEDIR);

    // console.log(zone);
}

module.exports = {
    name: "sign",
    desc: "Creates a signed zonefile for ZONE",
    args: [ "zone" ],
    opts: [],
    exec: sign
};
