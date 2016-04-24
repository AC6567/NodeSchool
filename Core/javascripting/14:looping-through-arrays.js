/* Challenge #14: looping through arrays
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.nodeschool.io */

var pets = ['cat', 'dog', 'rat'];

for (var i=0; i<pets.length; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);
