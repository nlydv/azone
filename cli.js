#!/usr/bin/env node

const { echo, exit } = require("shelljs");
const chalk = require("chalk");
const cmd = require("./index.js");
const { init } = require("./lib/init.js");

const COMMAND = process.argv[2];
const ARGS = process.argv.slice(3);

/* —————————————————————————————————————————————————————— */

function success(title = null, msg = null) {
    let output = `\n  ${chalk.green.bold("✓ ")}`;
    if ( title ) output += `${chalk.reset.bold(title)}`;
    if ( msg ) output += ` ${msg}`;
    console.log(output + "\n");
}

function warn(msg) {
    console.log(`\n  ${chalk.yellow.bold("！")}${chalk.reset(msg)}\n`);
}

function error(msg) {
    console.log(`\n  ${chalk.red.bold("✖ ")}${chalk.reset.bold("Error")} — ${msg}\n`);
}

const style = { success, warn, error };

function initialize() {
    const i = init();
    if ( ! i.success ) {
        style[i.type](i.msg);
        exit(i.code);
    }
}

/* @TODO:
create helper function to detect command return values and determine what sort of
style output to send (if any) so that I can use a one-liner with switch
*/

switch ( COMMAND ) {
    case "help":
        echo(require("./lib/commands/help.js").exec().msg);
        break;
    case "version":
        echo(require("./lib/commands/version.js").exec().msg);
        break;
    default:
        initialize();
        switch ( COMMAND ) {
            case "sign":
                cmd.sign(ARGS[0]);
                break;
            case "keygen":
                cmd.keygen();
                break;
            case "view":
                cmd.view();
                break;
            // ...
            // ...
            default:
                error("unknown command");
                exit(15);
        }
}
