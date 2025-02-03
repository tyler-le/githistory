import { execSync } from "child_process";
import { stringToAsciiArt } from "./util";
console.log(stringToAsciiArt("abcdefghij"));
console.log(stringToAsciiArt("klmnopqrs"));
console.log(stringToAsciiArt("tuvwxyz"));

// const dates = [
//   new Date("2024-01-01"),
//   new Date("2024-01-02"),
//   new Date("2024-01-03"),
//   new Date("2024-01-04"),
//   new Date("2024-01-05"),
// ];

// for (const date of dates) {
//   const dateString = date.toString().split("(")[0];
//   const command = `git commit --date="${dateString}" -m "${date.toDateString()}" --allow-empty`;
//   execSync(command);
// }
