// 1. 대소문자 바꿔 출력하기
const readline = require("readline");
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

// 특수문자 출력
rl.on("close", function () {
  console.log("!@#$%^&*(\\'\"<>?:;");
});

// 덧셈식 출력
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(
    `${input[0]} + ${input[1]} = ${Number(input[0]) + Number(input[1])}`
  );
});

// 문자열 붙여서 출력
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str1 = input[0];
  str2 = input[1];
  if (1 <= str1.length && str2.length <= 10) {
    const result = input.join("");
    console.log(result.trim());
  }
});

// 문자열 반복해서 출력
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const inputStr = input[0];
  const reps = Number(input[1]);
  const result = [];
  for (let i = 0; i < reps; i++) {
    result.push(inputStr);
  }
  console.log(result.join(""));
});
