// 1. 대소문자 바꿔 출력하기
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lowercaseStrings = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseStrings = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  let result = Array.from(str);

  for (let i = 0; i < result.length; i++) {
    const c = result[i];
    if (lowercaseStrings.includes(c)) {
      const findIdx = lowercaseStrings.indexOf(c);
      result[i] = uppercaseStrings[findIdx];
    } else if (uppercaseStrings.includes(c)) {
      const findIdx = uppercaseStrings.indexOf(c);
      result[i] = lowercaseStrings[findIdx];
    }
  }

  console.log(result.join(""));
});
