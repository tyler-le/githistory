"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstSunday = exports.stringToDates = exports.stringToAsciiArt = void 0;
var chars = {
    A: [1, 2, 3, 4, 5, 6, 7, 10, 14, 17, 22, 23, 24, 25, 26, 27],
    B: [0, 1, 2, 3, 4, 5, 6, 7, 10, 13, 14, 17, 20, 22, 23, 25, 26],
    C: [1, 2, 3, 4, 5, 7, 13, 14, 20, 21, 27],
    D: [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 22, 23, 24, 25, 26],
    E: [0, 1, 2, 3, 4, 5, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27],
    F: [0, 1, 2, 3, 4, 5, 6, 7, 10, 14, 17, 21, 24],
    G: [1, 2, 3, 4, 5, 7, 13, 14, 17, 20, 21, 24, 25, 26, 27],
    H: [0, 1, 2, 3, 4, 5, 6, 10, 17, 21, 22, 23, 24, 25, 26, 27],
    I: [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20],
    J: [5, 7, 13, 14, 20, 21, 22, 23, 24, 25, 26],
    K: [0, 1, 2, 3, 4, 5, 6, 10, 16, 18, 21, 22, 26, 27],
    L: [0, 1, 2, 3, 4, 5, 6, 13, 20, 27],
    M: [0, 1, 2, 3, 4, 5, 6, 8, 16, 22, 28, 29, 30, 31, 32, 33, 34],
    N: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27],
    O: [1, 2, 3, 4, 5, 7, 13, 14, 20, 22, 23, 24, 25, 26],
    P: [0, 1, 2, 3, 4, 5, 6, 7, 10, 14, 17, 22, 23],
    Q: [1, 2, 3, 4, 5, 7, 13, 14, 19, 20, 22, 23, 24, 25, 26, 27],
    R: [0, 1, 2, 3, 4, 5, 6, 7, 10, 14, 17, 22, 23, 25, 26, 27],
    S: [1, 2, 6, 7, 10, 13, 14, 17, 20, 21, 25, 26],
    T: [0, 7, 14, 15, 16, 17, 18, 19, 20, 21, 28],
    U: [0, 1, 2, 3, 4, 5, 6, 13, 20, 21, 22, 23, 24, 25, 26, 27],
    V: [0, 1, 2, 3, 4, 5, 13, 20, 21, 22, 23, 24, 25, 26],
    W: [0, 1, 2, 3, 4, 5, 6, 12, 18, 26, 28, 29, 30, 31, 32, 33, 34],
    X: [0, 1, 2, 4, 5, 6, 10, 17, 21, 22, 23, 25, 26, 27],
    Y: [0, 1, 2, 10, 17, 18, 19, 20, 21, 22, 23],
    Z: [0, 4, 5, 6, 7, 10, 11, 13, 14, 16, 17, 20, 21, 22, 23, 27],
};
var stringToAsciiArt = function (str) {
    var sunday = 0;
    var days = Array(365);
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var chr = str_1[_i];
        chr = chr.toUpperCase();
        if (chr === " ") {
            sunday += 7 * 2;
            continue;
        }
        var char = chars[chr];
        var width = Math.floor(char[char.length - 1] / 7 + 1);
        for (var _a = 0, char_1 = char; _a < char_1.length; _a++) {
            var day = char_1[_a];
            days[sunday + day] = "#";
        }
        sunday += (width + 1) * 7;
    }
    var weeks = Array(7)
        .fill(undefined)
        .map(function () { return Array(53).fill(" "); });
    for (var i = 0; i < days.length; i++) {
        if (days[i]) {
            var week = Math.floor(i / 7);
            var day = i % 7;
            weeks[day][week] = days[i];
        }
    }
    return weeks.map(function (week) { return week.join(""); }).join("\n");
};
exports.stringToAsciiArt = stringToAsciiArt;
var stringToDates = function (year, str) {
    var sunday = (0, exports.firstSunday)(year);
    var dates = [];
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var chr = str_2[_i];
        chr = chr.toUpperCase();
        if (chr === " ") {
            sunday.setDate(sunday.getDate() + 7 * 2);
            continue;
        }
        var char = chars[chr];
        var width = Math.floor(char[char.length - 1] / 7 + 1);
        for (var _a = 0, char_2 = char; _a < char_2.length; _a++) {
            var day = char_2[_a];
            var date = new Date(sunday.getTime());
            date.setDate(date.getDate() + day);
            dates.push(date);
        }
        sunday.setDate(sunday.getDate() + (width + 1) * 7);
    }
    return dates;
};
exports.stringToDates = stringToDates;
var firstSunday = function (year) {
    var firstDay = new Date("".concat(year, "-01-01"));
    var dayOfWeek = firstDay.getDay();
    var sunday = new Date(firstDay);
    sunday.setDate(firstDay.getDate() + ((7 - dayOfWeek) % 7));
    return sunday;
};
exports.firstSunday = firstSunday;
