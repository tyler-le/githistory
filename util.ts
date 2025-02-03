const chars = {
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

export const stringToAsciiArt = (str: string) => {
  let sunday = 0;
  const days = Array(365);
  for (let chr of str) {
    chr = chr.toUpperCase();
    if (chr === " ") {
      sunday += 7 * 2;
      continue;
    }
    const char = chars[chr as keyof typeof chars];
    const width = Math.floor(char[char.length - 1] / 7 + 1);
    for (const day of char) {
      days[sunday + day] = "#";
    }
    sunday += (width + 1) * 7;
  }
  const weeks: (string | undefined)[][] = Array(7)
    .fill(undefined)
    .map(() => Array(53).fill(" "));
  for (let i = 0; i < days.length; i++) {
    if (days[i]) {
      const week = Math.floor(i / 7);
      const day = i % 7;
      weeks[day][week] = days[i];
    }
  }
  return weeks.map((week) => week.join("")).join("\n");
};

export const stringToDates = (year: number, str: string) => {
  let sunday = firstSunday(year);
};

export const firstSunday = (year: number) => {
  const firstDay = new Date(`${year}-01-01`);
  const dayOfWeek = firstDay.getDay();
  const sunday = new Date(firstDay);
  sunday.setDate(firstDay.getDate() + ((7 - dayOfWeek) % 7));
  return sunday;
};
