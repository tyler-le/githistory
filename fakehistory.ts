import { execSync } from "child_process";
import { stringToAsciiArt, stringToDates } from "./util";
console.log(stringToAsciiArt("abcdefghij"));
console.log(stringToAsciiArt("klmnopqrs"));
console.log(stringToAsciiArt("tuvwxyz"));

console.log(stringToAsciiArt("TOO  EASY"));

const dates = stringToDates(2018, "TOO  EASY");
console.log(dates);

for (const date of dates) {
  const dateString = date.toString().split("(")[0];
  const command = `git commit --date="${dateString}" -m "${date.toDateString()}" --allow-empty`;
  execSync(command);
}
