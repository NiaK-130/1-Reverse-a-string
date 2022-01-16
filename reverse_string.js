function reverseString(str) {
  // input: "hi"
  // output: "ih"
  let reversed = "";
  for (let i = str.length-1; i >= 0; i--) {
    reversed = reversed + str[i]
    
  }
  return reversed
   
  // go through each letter - for loop
  // start from the end
  // print as is, starting from the end 

  // return result


  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution