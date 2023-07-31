function isPalindrome(word) {
  // Write your algorithm here
  //words should read the same forward and backwards
  const inputWord = word.toLowerCase();
  const newWord = inputWord.split('').reverse().join('');
  
  //creating a function to check if the words match

  if (newWord == inputWord){
    return true;
  } else{
    return false;
  }
}

/* 
  input:"dad"
  output:true
*/

/*
  Add written explanation of your solution here
  if the user's word is palindrome(read the same forward and backwards),
  it should return true
  if the user's word is not palindrome, it should return false
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
