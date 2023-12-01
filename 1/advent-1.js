const fs = require("fs")
const readline = require("readline")
const fileStream = fs.createReadStream("input2.txt")

var sum = 0

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
})

rl.on("line", (line) => {
  sum += sumCalibration(line)
})

rl.on("close", () => {
  console.log(sum)
})

const numbersMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
}
const REGEX = /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g
sumCalibration = (line) => {
  const allNumbers = [...line.matchAll(REGEX)] // Returns an array of matches, which itself is an array. The string found is the second element of each match
  const firstNumber = allNumbers[0][1]
  const lastNumber = allNumbers[allNumbers.length - 1][1]
  const mappedFirstNumber = numbersMap[firstNumber] || firstNumber
  const mappedLastNumber = numbersMap[lastNumber] || lastNumber
  return parseInt(mappedFirstNumber + mappedLastNumber)
}
