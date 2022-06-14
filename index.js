function isPalindrome(word) {
  // Write your algorithm here
  const str = word.toLowerCase()
  if (str == str.split('').reverse().join('')) {
    return true;
}
else {
    return false;
}
}

/* 
  Add your pseudocode here
  -Convert the string to lowercase letters
  -divide string into an array of substring 
  -reverse the array if substring 
  -concate all element of that array of substring into one string
  -if the argument is equal to the concated new string return true
  -else return false
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
