const { version: v } = require("../../package.json");

function version() {
    return { success: true, msg: v };
}

module.exports = {
    name: "version",
    desc: "Display version of azone",
    exec: version
};
