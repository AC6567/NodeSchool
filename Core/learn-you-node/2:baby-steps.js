/* Challenge #1: program (introduction)
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.nodeschool.io */

var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)
