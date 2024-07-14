var colors = require("colors/safe");
colors.enable();

class Cout {
    private appName: string;
    private pid: number;
    private className: string;

    constructor(appName: string = "Nodejs", className: string = "Cout") {
        this.appName = appName;
        this.className = className;
        this.pid = process.pid;
    }

    log(inpt: any) {
        this._log(inpt.message || inpt, "green", "LOG");
    }

    warn(inpt: any) {
        this._log(inpt.message || inpt, "yellow", "WARN");
    }

    error(inpt: any) {
        this._log(inpt.message || inpt, "red", "ERROR");

        if (inpt instanceof Error) {
            //@ts-ignore
            console.trace(inpt.details || inpt.cause || inpt);
        }
    }

    black(message: string) {
        this._log(message, "black", "LOG");
    }
    red(message: string) {
        this._log(message, "red", "LOG");
    }
    green(message: string) {
        this._log(message, "green", "LOG");
    }
    yellow(message: string) {
        this._log(message, "yellow", "LOG");
    }
    blue(message: string) {
        this._log(message, "blue", "LOG");
    }
    magenta(message: string) {
        this._log(message, "magenta", "LOG");
    }
    cyan(message: string) {
        this._log(message, "cyan", "LOG");
    }
    white(message: string) {
        this._log(message, "white", "LOG");
    }
    gray(message: string) {
        this._log(message, "gray", "LOG");
    }

    rainbow(message: string) {
        this._log(message, "rainbow", "LOG");
    }
    zebra(message: string) {
        this._log(message, "zebra", "LOG");
    }
    america(message: string) {
        this._log(message, "america", "LOG");
    }
    trap(message: string) {
        this._log(message, "trap", "LOG");
    }
    random(message: string) {
        this._log(message, "random", "LOG");
    }
    zalgo(message: string) {
        this._log(message, "zalgo", "LOG");
    }

    private _log(message: string, color: string = "cyan", type = "LOG") {
        const colorFn = (colors as any)[color];

        console.log(
            "\n",
            //@prettier-ignore
            colorFn(this.appName),
            " - ",
            `${new Date().toLocaleString()}`,
            "  ",
            colorFn(type),
            " ",
            colors.yellow.bold(`[${this.className}]`),
            " ",
            colorFn(message),
        );
    }
}


