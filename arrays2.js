function isArrayLengthOdd(numbers) {
  return numbers.length % 2 === 1;
}

function isArrayLengthEven(numbers) {
  return numbers.length % 2 == 0;
}
//use slice
function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}

function eliminateTeam(teams) {
  return teams.pop();
}
console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3]));
console.log(addLailaToArray(["salem", "Khaled"]));
console.log(eliminateTeam(["Italy", "Brazil", "Egypt"]));

//bonus challange 1

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 === 0) {
    const evenFruits = [];
    evenFruits.push(fruits.slice(fruits.length / 2, fruits.length));
    return evenFruits;
  } else return [];
}
console.log(
  secondHalfOfArrayIfItIsEven(["banana", "apples", "oranges", "grapes"])
);
console.log(secondHalfOfArrayIfItIsEven(["banana", "apples", "oranges"]));

// bonus challange 2

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  const firstExclamation = shout.indexOf(`!`);
  if (firstExclamation === -1) return shout;
  return shout.slice(0, firstExclamation + 1);
}
console.log(youGottaCalmDown("hellllllooooo!!!!"));
