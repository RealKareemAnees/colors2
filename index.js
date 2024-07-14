var colors = require("colors/safe");
colors.enable();
class Cout {
    appName;
    pid;
    className;
    constructor(appName = "Nodejs", className = "Cout") {
        this.appName = appName;
        this.className = className;
        this.pid = process.pid;
    }
    log(inpt) {
        this._log(inpt.message || inpt, "green", "LOG");
    }
    warn(inpt) {
        this._log(inpt.message || inpt, "yellow", "WARN");
    }
    error(inpt) {
        this._log(inpt.message || inpt, "red", "ERROR");
        if (inpt instanceof Error) {
            //@ts-ignore
            console.trace(inpt.details || inpt.cause || inpt);
        }
    }
    black(message) {
        this._log(message, "black", "LOG");
    }
    red(message) {
        this._log(message, "red", "LOG");
    }
    green(message) {
        this._log(message, "green", "LOG");
    }
    yellow(message) {
        this._log(message, "yellow", "LOG");
    }
    blue(message) {
        this._log(message, "blue", "LOG");
    }
    magenta(message) {
        this._log(message, "magenta", "LOG");
    }
    cyan(message) {
        this._log(message, "cyan", "LOG");
    }
    white(message) {
        this._log(message, "white", "LOG");
    }
    gray(message) {
        this._log(message, "gray", "LOG");
    }
    rainbow(message) {
        this._log(message, "rainbow", "LOG");
    }
    zebra(message) {
        this._log(message, "zebra", "LOG");
    }
    america(message) {
        this._log(message, "america", "LOG");
    }
    trap(message) {
        this._log(message, "trap", "LOG");
    }
    random(message) {
        this._log(message, "random", "LOG");
    }
    zalgo(message) {
        this._log(message, "zalgo", "LOG");
    }
    _log(message, color = "cyan", type = "LOG") {
        const colorFn = colors[color];
        console.log("\n", 
        //@prettier-ignore
        colorFn(this.appName), " - ", `${new Date().toLocaleString()}`, "  ", colorFn(type), " ", colors.yellow.bold(`[${this.className}]`), " ", colorFn(message));
    }
}
const logger = new Cout();
logger.log("hello world!");
logger.warn("This is a warning!");
logger.error("This is an error!");
logger.error(new Error("This is an error with details"));
logger.america("America text!");
