````markdown
# Cout Package

## Introduction

The `Cout` package provides a simple and effective way to log messages in Node.js applications with color-coded outputs. It leverages the `colors/safe` library to add color to console messages, making logs easier to read and distinguish.

## Installation

To use the `Cout` package, you need to install the `colors` package. You can do this using npm:

```bash
npm install colors
```
````

## Usage

First, require the `colors/safe` package and enable colors:

```javascript
var colors = require("colors/safe");
colors.enable();
```

Next, you can create an instance of the `Cout` class:

```javascript
const logger = new Cout("MyApp", "LoggerClass");
```

### Logging Methods

The `Cout` class provides various methods to log messages in different colors:

-   **General Logging:**

    -   `log(message: any)`: Logs a message in green.
    -   `warn(message: any)`: Logs a message in yellow.
    -   `error(message: any)`: Logs a message in red and prints a stack trace if the input is an error.

-   **Color-specific Logging:**

    -   `black(message: string)`: Logs a message in black.
    -   `red(message: string)`: Logs a message in red.
    -   `green(message: string)`: Logs a message in green.
    -   `yellow(message: string)`: Logs a message in yellow.
    -   `blue(message: string)`: Logs a message in blue.
    -   `magenta(message: string)`: Logs a message in magenta.
    -   `cyan(message: string)`: Logs a message in cyan.
    -   `white(message: string)`: Logs a message in white.
    -   `gray(message: string)`: Logs a message in gray.

-   **Special Effects:**
    -   `rainbow(message: string)`: Logs a message in rainbow colors.
    -   `zebra(message: string)`: Logs a message in zebra stripes.
    -   `america(message: string)`: Logs a message in America colors.
    -   `trap(message: string)`: Logs a message with a trap effect.
    -   `random(message: string)`: Logs a message in random colors.
    -   `zalgo(message: string)`: Logs a message with Zalgo text.

### Example

Here is a complete example demonstrating how to use the `Cout` class:

```javascript
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

// Create an instance of Cout
const logger = new Cout("MyApp", "LoggerClass");

// Log messages with different severity levels
logger.log("This is a log message.");
logger.warn("This is a warning message.");
logger.error(new Error("This is an error message."));

// Log messages with different colors
logger.green("This message is green.");
logger.red("This message is red.");
logger.blue("This message is blue.");
```

By using the `Cout` class, you can enhance your Node.js application's logging functionality, making it more readable and visually appealing.

```

```
