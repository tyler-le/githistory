import { execSync } from "child_process";
import { stringToAsciiArt, stringToDates } from "./util";

console.log(stringToAsciiArt("HI  WORLD"));

const dates = stringToDates(2018, "HI  WORLD");
console.log(dates);

for (const date of dates) {
  const dateString = date.toString().split("(")[0];
  const command = `git commit --date="${dateString}" -m "${date.toDateString()}" --allow-empty`;
  execSync(command);
}
