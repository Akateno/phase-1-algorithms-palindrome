function isPalindrome(word) {
const reverdWord = reverse(word);
return word === reverdWord
}

function reverse(word){
  return word.split("").reverse().join("")
}

//a function reverse that takes in a word, returns the word then splits into its letters,
//reverses the order, and joins them. 
//call is palindrome function 


/* 
  Add your pseudocode here
  if the word is the same as the word in reverse, It should return true 
  reverse the input string 
  if the input is the same as the reversed input return true else return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

