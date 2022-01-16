function reverseString(str) {
  //1. understand the problem - given a word, be able to 
  //reverse it without using the reverse function 
  //2. test cases:
  //input : hello
  //output: olleh
  //3. // we need to print out the word starting from the 
  //last letter 
  // initalize with an empty string 
  // we want to run through each letter, so for that 
  // a for loop
  // in the loop we want to start with the last letter 
  // for {let i = str.length - 1}
  // i >= 0 // run till i hits 0, will start at 4 
  //i -- // starts backwards
  //4.code 

  let newString = "";
  for (let i = str.length-1; i >= 0; i --){
    newString += str[i]
  }
  return newString 


}








// function reverseString(str) {
//   // input: "hi"
//   // output: "ih"
//   let reversed = "";
//   for (let i = str.length-1; i >= 0; i--) {
//     reversed = reversed + str[i]

//   }
//   return reversed
   
//   // go through each letter - for loop
//   // start from the end
//   // print as is, starting from the end 

//   // return result
  
// }

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