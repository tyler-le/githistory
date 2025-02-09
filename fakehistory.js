"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var util_1 = require("./util");
console.log((0, util_1.stringToAsciiArt)("HI  WORLD"));
var dates = (0, util_1.stringToDates)(2018, "HI  WORLD");
console.log(dates);
for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
    var date = dates_1[_i];
    var dateString = date.toString().split("(")[0];
    var command = "git commit --date=\"".concat(dateString, "\" -m \"").concat(date.toDateString(), "\" --allow-empty");
    (0, child_process_1.execSync)(command);
}
